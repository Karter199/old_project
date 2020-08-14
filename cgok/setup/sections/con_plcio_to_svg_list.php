<!DOCTYPE html>
<html> 
    <head>
	    <?php 
            require "../auth/auth.php";
            require_once '../inc/config.php';
            require_once '../inc/translate.php';
            require_once '../inc/version_check.php';
        ?>
        
		<meta charset="UTF-8"/>
        <link rel="stylesheet" href="../css/settings.css" type="text/css"/>
	</head>
    
    <body> 
        <div class="container">
            <?php error_reporting(E_ALL); ini_set('display_errors', 'On'); ?>
            <?php
                $current_object = (int) $_GET["obj"]; // ID поточного об'єкту 
            
                /****************************************************************************************
                    вичитуємо з бази даних Ім'я вибраного об'єкту
                *****************************************************************************************/
                $qry = "SELECT TOP 1 SVG_NAME FROM SVG_PARAMETERS WHERE ENABLE = 1 AND ID = " . $current_object;
            
                $svg_objects_text_query = $connection->query($qry);
                $svg_objects_text_array  = $svg_objects_text_query->fetch(PDO::FETCH_ASSOC);
                $current_object_name = $svg_objects_text_array['SVG_NAME']; 
            
                /****************************************************************************************
                    вичитуємо з бази даних входи, що належать oб'єкту
                *****************************************************************************************/
                $qry = "SELECT SRV_IO.ID, IO_S.CODE, IO_S.IO_NAME, IO_S.NOTE FROM SRV_IO 
                        JOIN IO_STATIC IO_S ON SRV_IO.IO_ID = IO_S.ID 
                        WHERE SRV_IO.PARAMETERS_ID = " . $current_object;
                
                $svg_to_io_inputs_query = $connection->query($qry);
                $svg_to_io_inputs_tmp = NULL;
                while($svg_to_io_inputs_array = $svg_to_io_inputs_query->fetch(PDO::FETCH_ASSOC)){
                    $svg_to_io_inputs_tmp[] = $svg_to_io_inputs_array;
                }
            
                /****************************************************************************************
                    вичитуємо з бази даних доступні для вибору входи
                 *****************************************************************************************/
                $qry = "SELECT IO_S.ID, IO_S.CODE, IO_S.IO_NAME FROM IO_STATIC IO_S
                            LEFT JOIN SRV_IO ON SRV_IO.IO_ID = IO_S.ID AND SRV_IO.PARAMETERS_ID = " . $current_object .
							" WHERE SRV_IO.IO_ID IS NULL";
             
                $inputs_all_query = $connection->query($qry);
                $nputs_all_tmp = NULL;
                while($inputs_all_array = $inputs_all_query->fetch(PDO::FETCH_ASSOC)){
                    $nputs_all_tmp[] = $inputs_all_array;
                }
            ?> 
            
            <?php
                /****************************************************************************************
                    ОБРОБКА НАТИСНЕННЯ КНОПОК
                *****************************************************************************************/
                 // Кнопка видалити
                if( isset( $_POST['delete_plcio_to_svg']) )
                {
                    try {
                        $id = (int)$_POST['delete_plcio_to_svg'];

                        $sql = "DELETE FROM SRV_IO WHERE ID =:id";
                        $stmt = $connection->prepare($sql);

                        $stmt->bindParam(':id', $id);
                        $stmt->execute();

                        unset($stmt);
                        unset($connection);
                        
                        header ("Location: con_plcio_to_svg_list.php?obj=" . $current_object, true, 301);   // переходимо на сторінку main 
                        exit();
                        } catch (Exception $e) {
                            echo $e->getMessage(); 
                            die;
                        } 
                }
            
                // Кнопка додати
                if( isset( $_POST['add_input']) )
                {
                    try {
                                              
                        $sql = "INSERT INTO SRV_IO 
                                        (IO_ID,
                                        PARAMETERS_ID)
                                    VALUES 
                                        (:io_id,
                                        :par_id)";
                        $stmt = $connection->prepare($sql);
                        
                        $stmt->bindParam(':io_id', $_POST['add_input']);
                        $stmt->bindParam(':par_id', $current_object);
                       
                        $stmt->execute();
                        
                        unset($stmt);
                        unset($connection);
                        
                        header ("Location: con_plcio_to_svg_list.php?obj=" . $current_object, true, 301);   // переходимо на сторінку logics_list 
                        exit();
                    } catch (Exception $e) {
                            echo $e->getMessage(); 
                            die;
                        } 
                }
            ?>
            
            <?php
            /****************************************************************************************
                Виводимо входи
            *****************************************************************************************/ 
            ?>
            
            <?php echo($current_object_name); ?>
           

            <div class="container_io">
                <div class="box">
                    <div class="box1">
                        <?php
                        /****************************************************************************************
                            Поточні входи об'єкта
                        *****************************************************************************************/ 
                        ?>
                        <?php // заголовки таблиці логічних виразів?>
                        <table>
                            <thead>
                                <tr>
                                    <th width="50"><?php echo $name['svg_to_io_input']; ?></th>
                               </tr>
                            </thead>
                            <?php 
                            /****************************************************************************************
                                Виводимо входи
                            *****************************************************************************************/ 
                            if($svg_to_io_inputs_tmp != NULL)
                            {
                                foreach($svg_to_io_inputs_tmp as $svg_to_plcio_inputs)
                                {
                                    ?>
                                    <tr>
                                        <form class="svg_to_io_form" method="post" action="con_plcio_to_svg_list.php?obj=<?php echo $current_object ?>">
                                            <?php //----------------Входи------------------------------- ?>
                                            <td align="center">
                                                <input type="text" readonly class="text_long" value="<?php echo $svg_to_plcio_inputs['IO_NAME']; ?>"><br>
                                                
                                                <input type="text" readonly class="text_long" value="<?php echo $svg_to_plcio_inputs['CODE']; ?>">
                                            </td>   
                                            
                                            <?php //----------------Примітка------------------------------ ?>
                                            <td align="center">
                                              
                                                <textarea name="plcio_to_svg_note" readonly="readonly" cols="22" rows="2" class="text_midle_area"><?php echo $svg_to_plcio_inputs['NOTE']; ?></textarea>
                                            </td>  

                                            <?php //------------------кнопка видалити----------------------- ?>
                                            <td align="center">
                                                <?php $text_display = " " . $svg_to_plcio_inputs['IO_NAME'] . "?"; ?>  <?php // текст запиту під час видалення ?>

                                                <button type="submit" name="delete_plcio_to_svg" class="b_delete" value="<?php echo $svg_to_plcio_inputs['ID'] ?>" onclick="return confirm ('<?php echo $name['plc_io_record_del']; echo $text_display; ?>')">Delete</button>
                                            </td>
                                        </form>   
                                    </tr>
                                    <?php
                                }
                            }
                            ?>
                        </table> 
                    </div>
                    <div class="box2">
                        
                        <table>
                            <?php 
                            /****************************************************************************************
                                Виводимо всі входи
                            *****************************************************************************************/ 
                            if($nputs_all_tmp != NULL)
                            {
                                foreach($nputs_all_tmp as $inputs_all)
                                {
                                    ?>
                                    <tr>
                                        <form class="svg_to_io_form" method="post" action="con_plcio_to_svg_list.php?obj=<?php echo $current_object ?>">
                                          
                                            
                                            <td align="center">
                                                <?php //----------------код входу-------------------------------- ?>
                                                <input type="text" readonly class="text_shot" value="<?php echo $inputs_all['CODE']; ?>">
                                                <?php //----------------Назва входу------------------------------- ?>
                                                <input type="text" readonly class="text_long" value="<?php echo $inputs_all['IO_NAME']; ?>">
                                            </td>   

                                            <?php //------------------кнопка видалити----------------------- ?>
                                            <td align="center">
                                                <?php $text_display = " " . $inputs_all['IO_NAME'] . "?"; ?>  <?php // текст запиту під час видалення ?>

                                                <button type="submit" name="add_input" value="<?php echo $inputs_all['ID'] ?>" onclick="return confirm ('<?php echo $name['svg_to_io_select']; echo $text_display; ?>')">ADD</button>
                                            </td>
                                        </form>   
                                    </tr>
                                    <?php
                                }
                            }
                            ?>
                        </table> 
                    </div>
                </div>
            </div> 
        </div>
    </body>
</html>