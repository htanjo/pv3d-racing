<?php
$data_file = "./dt_ranking01.txt";
$data_string = $_POST["ranking"];
if ($fh = fopen($data_file, "w")) {
	if (flock($fh, LOCK_EX)) {
		fwrite($fh, $data_string);
		flock($fh, LOCK_UN);
		echo "mes=SAVED SUCCESSFULLY!!";
	}
	else {
		echo "mes=FLOCK ERROR!!";
	}
}
else {
	echo "mes=FOPEN ERROR!!";
}
?>
