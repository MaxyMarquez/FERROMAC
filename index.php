<?php
$nombre = $ _POST['name'];
$email = $ _POST['email'];
$mensaje = $ _POST['message'];
$para = 'maxy.marquez@hotmail.com';
$titulo = 'Hola - La Webera';
 
$msjCorreo = "Nombre: $nombre\n E-Mail: $email\n Mensaje:\n $mensaje";
 
if ($ _POST['submit']) {
if (mail ($para, $titulo, $msjCorreo)) {
echo 'El mensaje se ha enviado';
} else {
echo 'Falló el envio';
}
}