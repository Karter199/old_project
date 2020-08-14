<?PHP

$config = array (
    'title' => 'Налаштування WEB-SCADA', 
//    Налаштування БД
    'db'    => array (
        'server'    => "localhost",
        'port'      => "1433",
        'username'  => "web_user",
        'password'  => "Gf45Rn27G",
        'db_name'   => "plc_server"
    )
);

require_once ('db.php');

?>