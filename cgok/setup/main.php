<!DOCTYPE html>
<html> 
	<head>
        <?php 
            require "auth/auth.php";
            require_once "inc/config.php";
            require_once "inc/translate.php";
            require_once "inc/version_check.php";
        ?>
		<meta charset="UTF-8"/>
		<link rel="stylesheet" href="css/main.css" type="text/css"/>
		<link rel="stylesheet" href="css/tabs.css" type="text/css"/>
		<link rel="stylesheet" href="css/settings.css" type="text/css"/>
	</head>
	
	<body> 
		
		<!--Подключаем HEADER-->
		<?php include "inc/header.php"; ?>
		<section>
			<div class="tabs">
                <input type="radio" name="inset" value="" id="tab_1" checked>
                <label for="tab_1"> <?php echo $name['plc_io']; ?> </label>         <?php // Налаштування входів PLC ?>

                <input type="radio" name="inset" value="" id="tab_2" <?php if($_GET['id'] == 2){?> checked <?php } ?> >
                <label for="tab_2"> <?php echo $name['svg_object']; ?> </label>     <?php // Налаштування об'єктів SVG ?>

                <input type="radio" name="inset" value="" id="tab_3" <?php if($_GET['id'] == 3){?> checked <?php } ?> >    
                <label for="tab_3"> <?php echo $name['con_io_svg']; ?> </label>     <?php // Налаштування зв'язків входів PLC та SVG ?>
                
                <input type="radio" name="inset" value="" id="tab_4" <?php if($_GET['id'] == 4){?> checked <?php } ?> >    
                <label for="tab_4"> <?php echo $name['logic']; ?> </label>          <?php // Налаштування логіки ?>
                
                <input type="radio" name="inset" value="" id="tab_5" <?php if($_GET['id'] == 5){?> checked <?php } ?> >    
                <label for="tab_5"> <?php echo $name['sys_settings']; ?> </label>   <?php // Системні налаштування ?>
                
                <div id="plc_io_settings">              <?hph // Налаштування входів PLC ?>
                    <?php //include "sections/plc_io.php"; ?>
                    <iframe name='ifr' src="sections/plc_io_list.php?page=1" width=100% height=90% frameborder=no> </iframe>  
                </div>
                
                <div id="svg_object_settings">          <?php // Налаштування об'єктів SVG ?>
                    <iframe name='ifr' src="sections/svg_object_list.php?page=1" width=100% height=90% frameborder=no> </iframe>           
                </div>
                
                <div id="con_plc_io_to_svg_settings">   <?php // Налаштування зв'язків входів PLC та SVG ?>
                    <?php include "sections/con_plcio_to_svg.php"; ?>
                </div>
                
                <div id="logics_settings">              <?php // Налаштування логіки ?>
                    <?php include "sections/logics.php"; ?>
                </div>
                
                <div id="system_settings">              <?php // Системні налаштування ?>
                    <?php include "sections/system_settings.php"; ?>
                </div>

            </div>
		</section>
		
		<footer>

		</footer>
		
	</body>
</html> 
