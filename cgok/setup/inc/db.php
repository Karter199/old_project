<?php

try
{
    $dsn = "sqlsrv:Server=" . $config['db']['server'] . "," 
                            . $config['db']['port'] . ";Database=" 
                            . $config['db']['db_name'];
    $connection = new PDO($dsn, 
                          $config['db']['username'], 
                          $config['db']['password']);
    $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch(PDOException $e)
{

    $e->getMessage();
    echo 'Невдале підключення до бази даних!<br>';
    exit();

}


//mysqli_set_charset($connection, 'utf8');

?>