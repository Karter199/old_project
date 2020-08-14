<?php
   // require "../inc/config.php";

    session_start();

    if(!isset($_SESSION['user']))
    {
		?>
		<script type="text/javascript">
            window.top.location.href = "../index.php"
        </script>
		<?php
        exit();
    }


    function Destroy() {
	        unset($_SESSION['user']);
	        header("location: index.php");
           
	    }

?>