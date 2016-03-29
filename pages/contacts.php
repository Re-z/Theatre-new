
<?php
//this file is a exact copy of the main contacts.php which lies in the root. It is done because index.html and index_rus.html lies in different folders but use the same script index.js

if (array_key_exists('messageFF', $_POST)) {
    mail ("re-z@ukr.net",
        "заполнена контактная форма с ".$_SERVER['HTTP_REFERER'],
        "Имя: ".$_POST['nameFF']."\nEmail: ".$_POST['contactFF']."\nСообщение: ".$_POST['messageFF']);
    echo $_POST['nameFF'];
}
?>