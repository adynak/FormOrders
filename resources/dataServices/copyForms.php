<?php

// http://embed.plnkr.co/jS4Ik0/
// http://embed.plnkr.co/h8zgE5PnL3zVCInU5YsC/

	$data = file_get_contents("php://input");
	$data = json_decode($data);

	// $fp = fopen('C:\Bitnami\wampstack-7.1.11-0\apache2\htdocs\formsOrders\test.txt','a');
	// fwrite($fp , $data->path);
	// fwrite($fp , "\r\n");
	// fwrite($fp , $data->formID);
	// fwrite($fp , "\r\n");
	// fwrite($fp , $data->localFolder);
	// fwrite($fp , "\r\n");

	$source = $data->path;
	$dest = $data->localFolder . "\\" . $data->formID;

	copyr($source, $dest);

	// for modern php, not the old poop on the DMS
	// mkdir($dest, 0755);
	// foreach (
 	// 		$iterator = new \RecursiveIteratorIterator(
 	//  			new \RecursiveDirectoryIterator($source, \RecursiveDirectoryIterator::SKIP_DOTS),
 	//  				\RecursiveIteratorIterator::SELF_FIRST) as $item
	// 	) {
 	//  		if ($item->isDir()) {
 	//    		mkdir($dest . DIRECTORY_SEPARATOR . $iterator->getSubPathName());
 	//  		} else {
 	//    		copy($item, $dest . DIRECTORY_SEPARATOR . $iterator->getSubPathName());
 	//  		}
	// }

	echo $data->formID;

	function copyr($source, $dest)
	{
    	// Check for symlinks
    	if (is_link($source)) {
        	return symlink(readlink($source), $dest);
    	}
    
    	// Simple copy for a file
    	if (is_file($source)) {
        	return copy($source, $dest);
    	}

    	// Make destination directory
    	if (!is_dir($dest)) {
        	mkdir($dest);
    	}

    	// Loop through the folder
    	$dir = dir($source);
    		while (false !== $entry = $dir->read()) {
        	// Skip pointers
        	if ($entry == '.' || $entry == '..') {
	            continue;
        	}

	        // Deep copy directories
        	copyr("$source/$entry", "$dest/$entry");
    	}

    	// Clean up
    	$dir->close();
    	return true;
	}
	
?>
