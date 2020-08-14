<?php
    require "../inc/config.php";

    session_start();

    function Fix($str) { //очищення полей
        $str = trim($str);
            if(get_magic_quotes_gpc()) {
            $str = stripslashes($str);
        }
        return $str;
    }

    $errmsg = array(); //масив для збереження помилок
	     
    $errflag = false; //флаг помилки

    $username = Fix($_POST['login']);//ім'я користувача
    $password = Fix($_POST['password']);//пароль

    //echo(password_hash($password, PASSWORD_DEFAULT));

    //перевірка імені користувача
    if($username == '') {
        $errmsg[] = 'Username missing'; //помилка
        $errflag = true; //встановлюємо флаг помилки
    }

    //перевірка пароля
    if($password == '') {
        $errmsg[] = 'Password missing'; //помилка
        $errflag = true; //встановлюємо флаг помилки
    }

    //якщо встановлений флаг помилки, переходимо до форми авторизації
    if($errflag) {
        $_SESSION['ERRMSG'] = $errmsg; //записуємо помилки
        session_write_close(); //закриваємо сесію
        header("location: ../index.php"); 
        exit();
    }

    //підраховуємо кількість записів
    //запит до БД
    $qry = "SELECT TOP 1 * FROM SRV_USERS WHERE USERNAME = '" . $username . "'";// AND PASSWORD  collate Cyrillic_General_CS_AS = '" . $password . "'";
    $data = $connection->query($qry);
    $row = $data->fetch(PDO::FETCH_ASSOC);

    
    if($row != NULL
        && $row['ENABLE'] == 1
        && $row['ROLE'] == 'admin'
        && password_verify($password, $row['PASSWORD']))
    {
        $_SESSION['user'] = $row['USERNAME'];
        header("location: ../main.php"); 
        exit();
    }
    else
    {
        echo ("Check username or password");
        unset($_SESSION['user']);  
    }
        


    


?>