<?php
require '../PHPMailer/PHPMailerAutoload.php';
$message = "Вы написали: ".$_REQUEST['fio'];
$mail = new PHPMailer;

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.yandex.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 's9t711@yandex.ru';                 // SMTP username
$mail->Password = 'megustastu1';                           // SMTP password
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to

$mail->setFrom('s9t711@yandex.ru', 'Отправитель');
$mail->addAddress('s9t711@yandex.ru', 'Получатель');     // Add a recipient
$mail->addReplyTo('s9t711@yandex.ru', 'Information');


//$mail->addAttachment('main.js');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заказ';
$mail->Body    = 'Сообщение получено от пользователя: '.$_POST['fio'];
$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
}
?>
