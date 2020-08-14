<?php

// паметры подключения
$serverName = "localhost, 1433"; 
$uid = "web_user";   
$pwd = "Gf45Rn27G";  
$databaseName = "plc_server"; 
$connectionInfo = array( "UID"=>$uid, "PWD"=>$pwd,"Database"=>$databaseName); 
$conn = sqlsrv_connect($serverName,$connectionInfo);

// переменнные для запроса
$page  = $_GET['p'];
$group = $_GET['g'];

$answer = '[';

if ($conn){
    //echo "Подключение к серверу успешно!<br/>";
    
    // обработка запроса  
    $tsql = "SELECT SVG_NAME,PARAMETERS,TYPE_PARAMETERS FROM SVG_PARAMETERS  WHERE SVG_PAGE='$page' and SVG_GROUP='$group' and ENABLE='1' ";
    $stmt = sqlsrv_query( $conn, $tsql); 
    
    if( $stmt === false )  
        {  
            echo "Error in statement preparation/execution.\n";  
        }  
    
    if($stmt  === false)  
        {  
            echo "Error in retrieving row.\n";  
        } 
   
while ($row = sqlsrv_fetch_array( $stmt, SQLSRV_FETCH_NUMERIC)) {
  //echo $row[0].",".$row[1].",".$row[2]."</br>"; 
  $answer = $answer.'{"obj":"'.$row[0].'","type":"'.$row[2].'",'.$row[1].'},' ;   
    
}
}else{
    echo "Соединение не удалось, ошибка:";
    die( print_r( sqlsrv_errors(), true));
}

$answer = $answer.'{"obj":"end","type":"0"}]';
echo $answer ;

sqlsrv_free_stmt( $stmt);  
sqlsrv_close( $conn); 

?>



