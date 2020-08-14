<?php
    $current_web_version = 3; /*Поточна версія веб-інтерфейсу setup*/

    /*вичитуємо поточну версію БД*/
    $qry = "SELECT TOP 1 S_VALUE FROM SRV_SETTINGS WHERE NAME = 'db_ver'";
    $current_db_version_query = $connection->query($qry);
    $current_db_version_tmp = $current_db_version_query->fetch(PDO::FETCH_ASSOC);
    $current_db_version = $current_db_version_tmp['S_VALUE'];
    
    if ($current_web_version != $current_db_version)
    {
        echo ("<b>Error-100</b> <br/>");
        echo ($name['srv_db_ver'] . " - " . $current_db_version / 100 . "<br/>");
        echo ($name['srv_web_ver'] . " - " . $current_web_version / 100 . "<br/>");
        echo ($name['srv_db_ver_eeror']);
       
        exit();
    }
?>