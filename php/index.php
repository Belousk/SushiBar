<?php

//В переменную $token нужно вставить токен, который нам прислал @botFather
$token = "your_token";

//Сюда вставляем chat_id
$chat_id = "your_chat_id";

//Определяем переменные для передачи данных из нашей формы
if ($_POST['act'] == 'order') {
    $name = ($_POST['name']);
    $phone = ($_POST['phone']);
    $quantityOfPeople = ($_POST['quantity_of_people']);
    $addres = ($_POST['addres']);
    $home = ($_POST['home']);
    $productName = implode(', ', $_POST['productName']);;

//Собираем в массив то, что будет передаваться боту
    $arr = array(
        'Имя:' => $name,
        'Телефон:' => $phone,
        'Кол-во наборов:' => $quantityOfPeople,
        'Адрес:' => $addres,
        'Дом:' => $home,
        'Названия продуктов:' => $productName
    );

//Настраиваем внешний вид сообщения в телеграме
    foreach($arr as $key => $value) {
        $txt .= "<b>".$key."</b> ".$value."%0A";
    };

//Передаем данные боту
    $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");


}

$new_url = '../index.html';
header('Location: '.$new_url);
?>
