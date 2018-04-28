<?php

	$data = file_get_contents("php://input");
	$data = json_decode($data);

	$fp = fopen('C:\Bitnami\wampstack-7.1.11-0\apache2\htdocs\formsOrders\test.txt','a');
	fwrite($fp , print_r($data,1));

	if (json_last_error() === JSON_ERROR_NONE) { 
		$dataOkay = true;
		$exitMsg = 'branding complete';
	} else { 
		$dataOkay = false;		
		$exitMsg = 'illegal characters in the json';
	} 
	
	$CMFNumber            = $data->brand->cmf;
	$dashFI               = $data->brand->dashFI;
	$Cnumber              = $data->brand->cNumber;
	$DialinNumber         = $data->brand->ip;
	$retailDeal           = $data->brand->dealRetail;
	$leaseDeal            = $data->brand->dealLease;
	$updateBy             = $data->brand->updateBy;
	$comment              = $data->brand->comment;
	$formRootFolder       = $data->brand->localFormsFolder;
	$pathToNewSampleDeals = $data->brand->localDealsFolder;
	$sampleDeals          = $retailDeal . ',' . $leaseDeal;

	$skipAddingDeals = false;
	if ($retailDeal == ""){
		if ($leaseDeal == ""){
			$skipAddingDeals = true;
		} else {
			$fiStream = 'FIStream' . $leaseDeal . '.txt';
		}
	} else {
		$fiStream = 'FIStream' . $retailDeal . '.txt';
	}


	$pathToForms = getFormIDs($formRootFolder);
	listMaps($pathToForms, $dashFI);
	listFields($pathToForms, $dashFI);
	listDefaultCfs($pathToForms,$dashFI,$fiStream,$Cnumber,$CMFNumber,$DialinNumber,$updateBy);

	if ($skipAddingDeals == false){
		clearSampleDeals($sampleDeals, $formRootFolder, $pathToNewSampleDeals);		
	}

	function clearSampleDeals($sampleDeals, $pathToForms, $pathToNewSampleDeals){
		global $fp;

		fwrite($fp , 'starting to clear sample deals');
		fwrite($fp , "\n");
		$forms = [];
		$test = [];
		$newDeals = explode(',' , $sampleDeals);
		
		$dealPrefix = 'FIStream';
		$formFolders = glob($pathToForms . "/*");

		foreach($formFolders as $formName){
			if(is_dir($formName)){
				$sampleDeals = glob($formName . '/samples/*');
				foreach($sampleDeals as $deal){
					if (is_file($deal)){
						unlink($deal);
					}
				}
				foreach ($newDeals as $newDeal){
					$source = $pathToNewSampleDeals . "/" . $dealPrefix . $newDeal . ".txt";
					$destination = $formName . "/samples/" . $dealPrefix . $newDeal . ".txt";
					if (copy($source , $destination)){
						array_push($test, "OK");
					} else {
						array_push($test, "NOK");
					}
				}
			}
		}

		if (in_array("NOK", $test)){
			fwrite($fp , "sample deal copy failed");
		} else {
			fwrite($fp , "sample deal copy complete");
		}		
	}

	function listMaps($pathToForms, $dashFI){
		global $fp;
		fwrite($fp , 'map items to rename');
		fwrite($fp , "\n");
		foreach($pathToForms as $formRootFolder){
			$dir = $formRootFolder . '\maps';
			$formItems = scandir($dir);
			foreach ($formItems as $value){
				if ($value == "." || $value == ".." || $value == "default"){

				} else {
					$fileParts = explode('-' , $value);
					$newValue = $fileParts[0] . '-' . $fileParts[1] . '-' . $dashFI . '-' . end($fileParts);
					$oldName =  $dir . '\\' . $value;
					$newName = $dir . '\\' . $newValue ;
					$success = rename($oldName , $newName);
					if ($success) {
						// echo "rename" . '<br>';
						// echo $oldName . '<br>';
						// echo $newName . '<br>';						
					} else {
						// echo 'rename failed for ' . $oldName . '<br>';
						// echo 'rename failed for ' . $newName . '<br>';
					}
				}
			}
		}
	}

	function listFields($pathToForms, $dashFI){
		global $fp;
		fwrite($fp , 'field items to rename');
		fwrite($fp , "\n");
		$dashParts = explode('-' , $dashFI);
		$dashRoot = $dashParts[0];
		foreach($pathToForms as $formRootFolder){
			$dir = $formRootFolder . '\fields\FI';
			$formItems = scandir($dir);
			foreach ($formItems as $value){
				if ($value == "." || $value == ".." || $value == "default"){

				} else {
					$fileParts = explode('-' , $value);
					$newValue = $fileParts[0] . '-' . $fileParts[1] . '-' . $dashFI . '.txt';
					$oldName = $dir . '\\' . $value;
					$newName = $dir . '\\' . $newValue ;
					$success = rename($oldName , $newName);
					if ($success) {
						// echo "rename" . '<br>';
						// echo $oldName . '<br>';
						// echo $newName . '<br>';						
					} else {
						fwrite($fp , 'rename failed for ' . $oldName);
						fwrite($fp , "\n");
						fwrite($fp , 'rename failed for ' . $newName);
						fwrite($fp , "\n");
					}					
				}
			}
		}
	}

	function getFormIDs($formRootFolder){
		global $fp;
		$items = glob($formRootFolder . "\*");
		$formIDs = array();
		foreach ($items as $item){
			if (is_dir($item)){
				array_push($formIDs , $item);
			}
		}
		return $formIDs;
	}

	function listDefaultCfs($pathToForms,$dashFI, $fiStream, $Cnumber, $CMFNumber, $DialinNumber, $updateBy){
		global $fp;
		fwrite($fp , 'default.cfs files to edit');
		fwrite($fp , "\n");

		$today        = date('m/d/Y');
		foreach($pathToForms as $item){
			$defaultFile = $item . "\default.cfs";
			if (is_file($defaultFile)){
				fwrite($fp , 'branding ' . $defaultFile);
				fwrite($fp , "\n");

				$lines = explode("\n", file_get_contents($defaultFile));
				$numberOfLines = count($lines);

				for ($x = 0 ; $x < $numberOfLines ; $x++){
					$thisLine = $lines[$x];
					if (substr($thisLine,0,10) == "[Form Type"){
						$values = '';
						$values = explode("*",$lines[$x]);
						$newLine = $values[0] . "*" . $values[1] . "*" . $dashFI . "]";
						$lines[$x] = $newLine;
						// echo $lines[$x];
						// echo '<br>';
						// echo $newLine;
						// echo '<br>';
					} else
					if (substr($thisLine,0,5) == "Ply1="){
						$values = '';
						$values    = explode("*",$lines[$x]);
						$plyString = explode("#",$lines[$x]);
						$plyName = $plyString[1];
						$newLine = $values[0] . "*" . $values[1] . "*" . $dashFI . "#" . $plyName;
						$lines[$x] = $newLine;
						// echo $lines[$x];
						// echo '<br>';
						// echo $newLine;
						// echo '<br>';
					} else
					if (substr($thisLine,0,5) == "Ply2="){
						$values = '';
						$values    = explode("*",$lines[$x]);
						$plyString = explode("#",$lines[$x]);
						$plyName = $plyString[1];
						$newLine = $values[0] . "*" . $values[1] . "*" . $dashFI . "#" . $plyName;
						$lines[$x] = $newLine;						
						// echo $lines[$x];
						// echo '<br>';
						// echo $newLine;
						// echo '<br>';
					} else
					if (substr($thisLine,0,5) == "Ply3="){
						$values = '';
						$values    = explode("*",$lines[$x]);
						$plyString = explode("#",$lines[$x]);
						$plyName = $plyString[1];
						$newLine = $values[0] . "*" . $values[1] . "*" . $dashFI . "#" . $plyName;
						$lines[$x] = $newLine;
						// echo $lines[$x];
						// echo '<br>';
						// echo $newLine;
						// echo '<br>';
					}
					if (substr($thisLine,0,5) == "Ply4="){
						$values = '';
						$values    = explode("*",$lines[$x]);
						$plyString = explode("#",$lines[$x]);
						$plyName = $plyString[1];
						$newLine = $values[0] . "*" . $values[1] . "*" . $dashFI . "#" . $plyName;
						$lines[$x] = $newLine;
						// echo $lines[$x];
						// echo '<br>';
						// echo $newLine;
						// echo '<br>';
					} else
					if (substr($thisLine,0,5) == "Ply5="){
						$values = '';
						$values    = explode("*",$lines[$x]);
						$plyString = explode("#",$lines[$x]);
						$plyName = $plyString[1];
						$newLine = $values[0] . "*" . $values[1] . "*" . $dashFI . "#" . $plyName;
						$lines[$x] = $newLine;
						// echo $lines[$x];
						// echo '<br>';
						// echo $newLine;
						// echo '<br>';
					} else
					if (substr($thisLine,0,5) == "Ply6="){
						$values = '';
						$values    = explode("*",$lines[$x]);
						$plyString = explode("#",$lines[$x]);
						$plyName = $plyString[1];
						$newLine = $values[0] . "*" . $values[1] . "*" . $dashFI . "#" . $plyName;
						$lines[$x] = $newLine;
						// echo $lines[$x];
						// echo '<br>';
						// echo $newLine;
						// echo '<br>';
					} else
					if (substr($thisLine,0,5) == "[Ply "){
						$values = '';
						$values    = explode("*",$lines[$x]);
						$plyString = explode("#",$lines[$x]);
						$plyName = $plyString[1];
						$newLine = $values[0] . "*" . $values[1] . "*" . $dashFI . "#" . $plyName;
						$lines[$x] = $newLine;
						// echo $lines[$x];
						// echo '<br>';
						// echo $newLine;
						// echo '<br>';
					} else 
					if (substr($thisLine,0,14) == "Archive Queue="){
						$newLine = "Archive Queue=" . str_replace("-","_",$dashFI);
						$lines[$x] = $newLine;
						// echo $lines[$x];
						// echo '<br>';
						// echo "Archive Queue=" . $newLine;
						// echo '<br>';
					} else 
					if (substr($thisLine,0,16) == "Mapper Filename="){
						$values = '';
						$values    = explode("-",$lines[$x]);
						$plyName = end($values);
						$newLine = $values[0] . "-" . $values[1] . "-" . $dashFI . "-" . $plyName;
						$lines[$x] = $newLine;
						// echo $lines[$x];
						// echo '<br>';
						// echo $newLine;
						// echo '<br>';
					} else 
					if (substr($thisLine,0,10) == "Form Type1"){
						$values  = '';
						$values  = explode("*",$lines[$x]);
						$newLine = $values[0] . "*" . $values[1] . "*" . $dashFI ;
						$lines[$x] = $newLine;
						// echo $lines[$x];
						// echo '<br>';
						// echo $newLine;
						// echo '<br>';
					} else
					if (substr($thisLine,0,15) == "Last Updated by"){
						$lines[$x] = "Last Updated by=$updateBy";
					} else
					if(substr($thisLine,0,13) == "Revision Date"){
						$lines[$x] = "Revision Date=$today";
					} else
					if(substr($thisLine,0,8) == "Comments"){
						$lines[$x] = "Comments=";
					} else
					if(substr($thisLine,0,20) == "Sample Data Filename"){
						$lines[$x] = "Sample Data Filename=$fiStream";
					} else
					if(substr($thisLine,0,8) == "C Number"){
						$lines[$x] = "C Number=$Cnumber";
					} else
					if(substr($thisLine,0,10) == "CMF Number"){
						$lines[$x] = "CMF Number=$CMFNumber";
					} else
					if(substr($thisLine,0,13) == "Dialin Number"){
						$lines[$x] = "Dialin Number=$DialinNumber";
					}

				}

				$str = implode("\n", $lines);
				file_put_contents($defaultFile, $str);
				$lines = '';
			}
		}
	}

?>