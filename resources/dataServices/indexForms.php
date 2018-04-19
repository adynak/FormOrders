<?php

	$pathToindex = "/Library/WebServer/Documents/angular/git/FormOrders/resources/dataServices/forms.txt";
	$myfile = fopen($pathToindex, "r") or die("Unable to open file!");

	$row = array();
	$formsIndex = array();

	while(!feof($myfile)) {
		$str = fgets($myfile);
		$str = preg_replace('/[\x00-\x1F\x80-\xFF]/', '', $str);
		$str = str_replace('\\', '/', $str);

		$path_parts = pathinfo($str);
		$dirName = $path_parts['dirname'];
		if ($dirName <> ''){
			$dirParts = explode("/" , $dirName);
			$fileName = $path_parts['filename'];
			// echo 'dirname =  ' . $dirName . "<br>";
			// echo 'filename =  ' . end($dirParts) . "<br>";
			$row['id'] = end($dirParts);
					$str = str_replace('/', "\\", $dirName);

			$row['path'] = $str;

			$formsIndex[] = $row;			
		}
	}
	
	echo 'json = ' . json_encode($formsIndex);
	fclose($myfile);


?>