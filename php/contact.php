<?php
require_once "PHPMailerAutoload.php";
@$name = $_POST['name'];
@$email = $_POST['email'];
@$message = $_POST['message'];
@$phone = $_POST['mobile'];

echo $name AND $email AND $phone;
 
   $mail = new PHPMailer();
   $mail->IsSMTP();
   $mail->Mailer = "smtp";
   $mail->Host = "smtp.exmail.qq.com";
   $mail->Port = 465; // 8025, 587 and 25 can also be used. Use Port 465 for SSL.
   $mail->SMTPAuth = true;
   $mail->SMTPSecure = 'ssl';
   $mail->Username = "admin@apgaa.com.au";
   $mail->Password = "Wcon6666";
   $mail->SetFrom("admin@apgaa.com.au", $name);
   $mail->AddAddress("admin@apgaa.com.au", "Customer email");
 
   $mail->Subject  = "Message from APGAA customer";
   $mail->Body     = $message;
   $mail->WordWrap = 50;  
 
   if(!$mail->Send()) {
		echo 'Message was not sent.';
		echo 'Mailer error: ' . $mail->ErrorInfo;
		exit;
   } else {
		echo 'Message has been sent.';
   }
?>