<?php
    // в залежності від налаштувань витягуємо текст українською, чи російськой мовой
    // вичитуємо параметр налаштування мови
    $qry = "SELECT TOP 1 S_VALUE FROM SRV_SETTINGS WHERE NAME = 'sys_lang'";
    $system_settings_query = $connection->query($qry);
    $system_settings = $system_settings_query->fetch(PDO::FETCH_ASSOC);
    $current_language = $system_settings['S_VALUE'];
  

    /***************************************************************************
       Зчитуємо назви вибраною мовою
     ***************************************************************************/

    switch ($current_language) 
    {
        case "1":  // українська
            $column = 'NAME_UA';
            break;
            
        case "2":  // російська
            $column = 'NAME_RU';
            break;
        
        default: // за замовчуванням - українська
            $column = 'NAME_UA';
            break;
    }

    // вибірка із бази в залежності від налаштувань мови 
    $qry = "SELECT TOP 100 ID, " . $column . " FROM SRV_SETUP_TRANSLATE";
    $system_translate_query = $connection->query($qry);

    $translate_list = array(); // масив для збереження перекладів текстів
    $translate_name = array();

    while($translate_list = $system_translate_query->fetch(PDO::FETCH_ASSOC)){
        $translate_name[] = $translate_list[$column];
    }

    $name = array(
        // Сторінка авторизації
        'user_name'         =>  $translate_name[0],    // для авторизації
        'user_pass'         =>  $translate_name[1],    // для авторизації
        
        // розділи
        'plc_io'            =>  $translate_name[2],    // Входи PLC
        'svg_object'        =>  $translate_name[3],    // Об'єкти SVG
        'con_io_svg'        =>  $translate_name[4],    // Зв'язок між SVG oб'єктами та входми PLC
        'logic'             =>  $translate_name[5],    // Логічні вирази
        'sys_settings'      =>  $translate_name[6],    // Системні налаштування
        
        //Розділ системних налаштувань
        'language'          =>  $translate_name[10],    // мови
        
        // розділ додавання входів PLC
        'plc_io_name'       =>  $translate_name[11],    // Назва входу PLC
        'plc_id'            =>  $translate_name[12],    // Ідентифікатор PLC
        'code_io'           =>  $translate_name[13],    // Код входу
        'state_io'          =>  $translate_name[14],    // Стан входу
        'date_time'         =>  $translate_name[15],    // Час та дата оновлення
        'time_ms'           =>  $translate_name[16],    // мілісекунди часу оновлення
        'plc_note'          =>  $translate_name[17],    // Примітка
        
        'plc_io_record_del' =>  $translate_name[20],    // Текст запитання видалити рядок
        'plc_io_record_upd' =>  $translate_name[21],    // Текст запитання оновити рядок
        
        // розділ додавання параметрів
        'svg_page'          =>  $translate_name[24],    // Сторінка на якій знаходиться SVG oб'єкт
        'svg_object_group'  =>  $translate_name[25],    // Група параметрів SVG oб'єктів
        'svg_object_name'   =>  $translate_name[26],    // Назва параметра SVG oб'єкту
        'svg_object_type'   =>  $translate_name[27],    // Тип параметра SVG oб'єкту
        'svg_object_text'   =>  $translate_name[28],    // Текст параметра SVG oб'єкту
        'svg_font_color'    =>  $translate_name[29],    // Колір тексту 
        'svg_font_size'     =>  $translate_name[30],    // Розмір тексту
        'svg_object_enable' =>  $translate_name[31],    // Активний чи не активний параметр
        
        'svg_object_del'    =>  $translate_name[34],    // Текст запитання видалити рядок
        'svg_object_upd'    =>  $translate_name[35],    // Текст запитання оновити рядок
        
        // розділ логіки
        'logic_priority'    =>  $translate_name[39],    // Порядок виконання
        'logic_condition'   =>  $translate_name[40],    // Умова виконання
        'logic_result'      =>  $translate_name[41],    // Результат виконання умови
        'logic_enable'      =>  $translate_name[42],    // Умова активна
        'logic_error'       =>  $translate_name[43],    // Помилка умови
        
        'logic_del'         =>  $translate_name[45],    // Текст запитання видалити рядок
        'logic_upd'         =>  $translate_name[46],    // Текст запитання оновити рядок
        
        // розділ зв'язків входи-об'єкти
        'svg_to_io_input'   =>  $translate_name[49],   // Перелік входів прив'язаних до об'єкту
        
        'svg_to_io_select'  =>  $translate_name[52],   // Текст запитання вибрати вхід
        
        //розділ системні налаштування
        'srv_db_ver'        =>  $translate_name[55],   // Текст версія БД
        'srv_db_ver_eeror'  =>  $translate_name[56],   // Текст версія БД та програми не співпадають
        'srv_web_ver'       =>  $translate_name[57]    // Текст версія WEB
        
    );
?>