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
            <?php
                $current_object = (int) $_GET["obj"]; // ID поточного об'єкту       
                
                /****************************************************************************************
                    вичитуємо з бази даних текст вибраного об'єкту
                *****************************************************************************************/
                $qry = "SELECT TOP 1 SVG_NAME, TYPE_PARAMETERS, PARAMETERS FROM SVG_PARAMETERS WHERE ENABLE = 1 AND ID = " . $current_object;
            
                $svg_objects_text_query = $connection->query($qry);
                $svg_objects_text_array  = $svg_objects_text_query->fetch(PDO::FETCH_ASSOC);
                $current_object_name = $svg_objects_text_array['SVG_NAME']; 
                $svg_objects_text = $svg_objects_text_array['PARAMETERS'];  
                $svg_objects_type = (int)$svg_objects_text_array['TYPE_PARAMETERS'];
                /****************************************************************************************
                    вичитуємо з бази даних логіку для вибраного об'єкту
                *****************************************************************************************/
                $qry = "SELECT ID, PAR_PRIORITY, CONDITION, CONDITION_ERROR, EXECUTION_FIRST, EXECUTION_SECOND, PAR_ENABLE, NOTE FROM SRV_LOGICS WHERE        PARAMETERS_ID = " . $current_object . " ORDER BY PAR_PRIORITY";
                $logics_query = $connection->query($qry);
                $logics_tmp = NULL;
                while($logics_array = $logics_query->fetch(PDO::FETCH_ASSOC)){
                    $logics_tmp[] = $logics_array;
                }
            
                /****************************************************************************************
                    вичитуємо з бази випадаючий кольорів
                *****************************************************************************************/
                $qry = "SELECT TOP 20 ID, COLOR_NAME, COLOR_CODE FROM SRV_COLOR";
                $result_color_query = $connection->query($qry);

                while($result_color_array = $result_color_query->fetch(PDO::FETCH_ASSOC)){
                    $result_color_tmp[] = $result_color_array;
                }
            ?>   
            
            <?php
                /****************************************************************************************
                    ОБРОБКА НАТИСНЕННЯ КНОПОК
                *****************************************************************************************/
                 // Кнопка видалити
                if( isset( $_POST['delete_logic']) )
                {
                    try {
                        $id = (int)$_POST['delete_logic'];

                        $sql = "DELETE FROM SRV_LOGICS WHERE ID =:id";
                        $stmt = $connection->prepare($sql);

                        $stmt->bindParam(':id', $id);
                        $stmt->execute();

                        unset($stmt);
                        unset($connection);
                        
                        header ("Location: logics_list.php?obj=" . $current_object, true, 301);   // переходимо на сторінку main 
                        exit();
                        } catch (Exception $e) {
                            echo $e->getMessage(); 
                            die;
                        } 
                }
            
                // Кнопка оновити
                if( isset( $_POST['update_logic']) )
                {
                    try {
                        $id = (int)$_POST['update_logic'];
                        $enable = (int) $_POST['logic_enable'];
                        $error = (int) $_POST['logic_error'];
                        
                        $sql = "UPDATE SRV_LOGICS SET 
                                            PAR_PRIORITY = :par_priority,
                                            CONDITION = :condition,
                                            CONDITION_ERROR = :condition_error,
                                            EXECUTION_FIRST = :exec_first,
                                            EXECUTION_SECOND = :exec_second,
                                            PAR_ENABLE = :enable,
                                            NOTE = :note
                                            WHERE ID = :id";
                        $stmt = $connection->prepare($sql);

                        $stmt->bindParam(':par_priority', $_POST['logic_priority']);
                        $stmt->bindParam(':condition', trim ($_POST['logic_condition']));
                        $stmt->bindParam(':condition_error', $error);
                        $stmt->bindParam(':exec_first', $_POST['logic_resalt_1']);
                        $stmt->bindParam(':exec_second', $_POST['logic_resalt_2']);
                        $stmt->bindParam(':enable', $enable);
                        $stmt->bindParam(':note', trim($_POST['logic_note']));
                        $stmt->bindParam(':id', $id);
                        $stmt->execute();
                        
                        unset($stmt);
                        unset($connection);
                        
                        header ("Location: logics_list.php?obj=" . $current_object, true, 301);   // переходимо на сторінку logics_list 
                        exit();
                    } catch (Exception $e) {
                            echo $e->getMessage(); 
                            die;
                        }   
                }
            
                // Кнопка додати
                if( isset( $_POST['add_logic']) )
                {
                    try {
                        $enable = (int) $_POST['logic_enable'];
                        
                        $exec_first = $_POST['logic_resalt_1'];
                        $exec_second = $_POST['logic_resalt_2'];
                    
                        $sql = "INSERT INTO SRV_LOGICS 
                                        (PARAMETERS_ID,
                                        PAR_PRIORITY,
                                        CONDITION,
                                        EXECUTION_FIRST,
                                        EXECUTION_SECOND,
                                        PAR_ENABLE,
                                        NOTE)
                                    VALUES 
                                        (:par_id,
                                        :par_priority,
                                        :condition,
                                        :exec_first,
                                        :exec_second,
                                        :enable,
                                        :note)";
                        $stmt = $connection->prepare($sql);
                        
                        $stmt->bindParam(':par_id', $current_object);
                        $stmt->bindParam(':par_priority', $_POST['logic_priority']);
                        $stmt->bindParam(':condition', trim($_POST['logic_condition']));
                        $stmt->bindParam(':exec_first', $exec_first);
                        $stmt->bindParam(':exec_second', $exec_second);
                        $stmt->bindParam(':enable', $enable);
                        $stmt->bindParam(':note', trim($_POST['logic_note']));
                        $stmt->execute();
                        
                        unset($stmt);
                        unset($connection);
                        
                        header ("Location: logics_list.php?obj=" . $current_object, true, 301);   // переходимо на сторінку logics_list 
                        exit();
                    } catch (Exception $e) {
                            echo $e->getMessage(); 
                            die;
                        } 
                }
            ?>
            
            <?php 
            /****************************************************************************************
                Виводимо текст параметра
            *****************************************************************************************/ 
            ?>
            <table>
                <tr>
                    <td align="center" width="150">
                       
                        <?php// echo($name['svg_object_text']); ?>
                        <?php echo($current_object_name); ?>
                    </td>
                    <td align="center">
                        <textarea name="comments" readonly cols="22" rows="2" class="text_long_area"><?php echo ($svg_objects_text); ?></textarea>
                    </td>
                </tr>
            </table>
            
            <?php // заголовки таблиці логічних виразів?>
            <table>
                <thead>
                    <tr>
                        <th width="50"><?php echo $name['logic_priority']; ?></th>
                        <th width="400"><?php echo $name['logic_condition']; ?></th>
                        <th width="50"><?php echo $name['logic_result']; ?></th>    
                        <th width="50"><?php echo $name['logic_enable']; ?></th>
                        <th width="50"><?php echo $name['logic_error']; ?></th>
                        <th width="350"><?php echo $name['plc_note']; ?></th>
                   </tr>
               </thead>
                
                <?php 
                /****************************************************************************************
                    Виводио логічні вирази
                *****************************************************************************************/ 
                if($logics_tmp != NULL)
                {
                    foreach($logics_tmp as $logics)
                    {
                        ?>
                        <tr>
                            <form class="logics_form" method="post" action="logics_list.php?obj=<?php echo $current_object ?>">
                                <?php //----------------Пріоритет------------------------------- ?>
                                <td align="center">
                                    <input type="number" pattern="^[0-9]+$" required name="logic_priority" class="text_shot" value="<?php echo $logics['PAR_PRIORITY']; ?>">
                                </td>
                                
                                <?php //----------------Логічний вираз--------------------------- ?>
                                <td align="center">
                                  <textarea name="logic_condition" cols="22" rows="2" class="text_midle_area"><?php echo ($logics['CONDITION']); ?></textarea>  
                                </td> 
                                
                                <?php //----------------Результат виконання---------------------- ?>
                                <td align="center">
                                    <?php //Результат виконання 1?>
                                    <select name="logic_resalt_1" class="text_midle">
                                        <?php
                                        foreach($result_color_tmp as $result_color)
                                        {
                                            ?>
                                            <option style="background: <?php echo $result_color['COLOR_CODE']; ?>"
                                                    value="<?php echo $result_color['ID']; ?>" <?php 
                                                if ($logics['EXECUTION_FIRST'] == $result_color['ID']) { ?> selected <?php } ?> > 
                                                <?php echo $result_color['COLOR_NAME']; ?>
                                            </option> 
                                            <?php
                                        }
                                        ?>
                                    </select> <br>

                                    <?php //Результат виконання 2?>
                                    <select name="logic_resalt_2" class="text_midle">
                                        <?php
                                        foreach($result_color_tmp as $result_color)
                                        {
                                            ?>
                                            <option style="background: <?php echo $result_color['COLOR_CODE']; ?>" 
                                                    value="<?php echo $result_color['ID']; ?>" <?php 
                                                if ($logics['EXECUTION_SECOND'] == $result_color['ID']) { ?> selected <?php } ?> > 
                                                <?php echo $result_color['COLOR_NAME']; ?>
                                            </option> 
                                            <?php
                                        }
                                        ?>
                                    </select>
                                </td>
                                                                
                                <?php //----------------CheckBox запис активний----------------- ?>
                                <td align="center">
                                    <input type="checkbox" name="logic_enable" value="1" 
                                                            <?php if($logics['PAR_ENABLE'] == "1"){?> checked <?php } ?> />
                                </td>
                                
                                <?php //----------------CheckBox помилка логіки----------------- ?>
                                <td align="center">
                                    <input type="checkbox" <?php if($logics['CONDITION_ERROR'] == "0"){?> disabled readonly <?php } ?> name="logic_error" value="1" 
                                                            <?php if($logics['CONDITION_ERROR'] == "1"){?> checked <?php } ?> />
                                </td>
                                
                                <?php //----------------Примітка-------------------------------- ?>
                                <td align="center">
                                  <textarea name="logic_note" cols="22" rows="2" class="text_midle_area"><?php echo ($logics['NOTE']); ?></textarea>   
                                </td> 
                                <?php //------------------кнопка оновити------------------------ ?>
                                <td align="center">
                                    <?php $text_display = " " .  $logics['PAR_PRIORITY'] . "?"; ?>  <?php // текст запиту під час видалення ?>

                                    <button autofocus type="submit" name="update_logic" value="<?php echo $logics['ID'] ?>" onclick="return confirm ('<?php echo $name['logic_upd']; echo $text_display; ?>')">Update</button>
                                </td>

                                <?php //------------------кнопка видалити----------------------- ?>
                                <td align="center">
                                    <?php $text_display = " " . $logics['PAR_PRIORITY'] . "?"; ?>  <?php // текст запиту під час видалення ?>

                                    <button type="submit" name="delete_logic" class="b_delete" value="<?php echo $logics['ID'] ?>" onclick="return confirm ('<?php echo $name['logic_del']; echo $text_display; ?>')">Delete</button>
                                </td>
                            </form>
                        </tr>                        
                    <?php
                    }
                }
                ?>
                
                <?php
                /****************************************************************************************
                    Виводимо рядок додавання Логіки
                *****************************************************************************************/
                ?>
                <tr  height = 20px>
                    <?php // Вставляємо пустий рядок для відділення рядка додати вхід ?>
                </tr>

                <tr>
                    <form class="logics_add_form" method="post" action="logics_list.php?obj=<?php echo $current_object ?>">
                        <?php //----------------Пріоритет------------------------------- ?>
                        <td align="center">
                            <input type="number" pattern="^[0-9]+$" required name="logic_priority" class="text_shot" value="">
                        </td>

                        <?php //----------------Логічний вираз--------------------------- ?>
                        <td align="center">
                          <textarea name="logic_condition" cols="22" rows="2" class="text_midle_area"></textarea>  
                        </td> 

                        <?php //----------------Результат виконання---------------------- ?>
                        <td align="center">
                            <?php //Результат виконання 1?>
                            <select name="logic_resalt_1" class="text_midle">
                                <?php
                                foreach($result_color_tmp as $result_color)
                                {
                                    ?>
                                    <option style="background: <?php echo $result_color['COLOR_CODE']; ?>" 
                                            value="<?php echo $result_color['ID']; ?>"> 
                                        <?php echo $result_color['COLOR_NAME']; ?>
                                    </option> 
                                    <?php
                                }
                                ?>
                            </select> <br>

                            <?php //Результат виконання 2?>
                            <select name="logic_resalt_2" class="text_midle">
                                <?php
                                foreach($result_color_tmp as $result_color)
                                {
                                    ?>
                                    <option style="background: <?php echo $result_color['COLOR_CODE']; ?>" 
                                            value="<?php echo $result_color['ID']; ?>"> 
                                        <?php echo $result_color['COLOR_NAME']; ?>
                                    </option> 
                                    <?php
                                }
                                ?>
                            </select>
                        </td>
                       
                        <?php //----------------CheckBox запис активний----------------- ?>
                        <td align="center">
                            <input type="checkbox" name="logic_enable" value="1"/>
                        </td>
                        
                        <?php //----------------CheckBox помилка логіки----------------- ?>
                        <td align="center">
                            <input type="hidden" />
                        </td>

                        <?php //----------------Примітка-------------------------------- ?>
                        <td align="center">
                          <textarea name="logic_note" cols="22" rows="2" class="text_midle_area"></textarea> 

                        </td> 
                        
                        <?php //------------------кнопка додати------------------------- ?>
                        <td align="center">
                            <button autofocus type="submit" name="add_logic" value="add" > ADD </button>
                        </td>
                    </form>
                </tr>
            </table>   
        </div>
    </body>
</html>
