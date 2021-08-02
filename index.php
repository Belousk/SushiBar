<?php

//В переменную $token нужно вставить токен, который нам прислал @botFather
$token = "1933557714:AAGX0bEWCDiiYtAy9ezd9rJdNmKOOY0xJwU";

//Сюда вставляем chat_id
$chat_id = "-1001508067558";

//Определяем переменные для передачи данных из нашей формы
if ($_POST['act'] == 'order') {
    $name = ($_POST['name']);
    $phone = ($_POST['phone']);
    $quantityOfPeople = ($_POST['quantity_of_people']);
    $addres = ($_POST['addres']);
    $home = ($_POST['home']);
    $productName = ($_POST['productName']);

//Собираем в массив то, что будет передаваться боту
    $arr = array(
        'Имя:' => $name,
        'Телефон:' => $phone,
        'Кол-во палочек(пар):' => $quantityOfPeople,
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

//Выводим сообщение об успешной отправке
    if ($sendToTelegram) {
        alert('Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.');
    }

//А здесь сообщение об ошибке при отправке
    else {
        alert('Что-то пошло не так. ПОпробуйте отправить форму ещё раз.');
    }
}

?>