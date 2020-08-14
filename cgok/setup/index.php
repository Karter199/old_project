<!DOCTYPE html>
<html> 
	<head>
        <?PHP 
            require_once "inc/config.php";
            require_once "inc/translate.php";
        ?>
		<meta charset="UTF-8"/>
		<title><?php echo $config[title]; ?></title>
    	<link rel="stylesheet" href="css/login.css" type="text/css"/>
		<link rel="stylesheet" href="css/main.css" type="text/css"/>
	</head>
	
	<body> 
		<section>
			<div class="container">
				<form class="form-1" action='auth/login.php' method='POST'>
					<p class="field">
						<input type="text" name="login" placeholder="<?php echo($name['user_name']) ?>">
						<i class="icon-user icon-large"></i>
					</p>
						<p class="field">
						<input type="password" name="password" placeholder="<?php echo($name['user_pass']) ?>">
						<i class="icon-lock icon-large"></i>
					</p>       
					<p class="submit">
						<button type="submit" name="submit"><i class="icon-arrow-right icon-large"></i></button>
					</p>
				</form>
			</div>
		</section>
		
		<footer>
			<div class="container">
                
			</div>
		</footer>
		
		
	</body>