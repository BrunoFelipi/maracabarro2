<?php
    include '../../conexao.php';
    $data = json_decode(file_get_contents('php://input'), true);

    $idComunicado = $data['idComunicado'];
    $usuario = $data['usuario'];

    $sql = "INSERT INTO curtidascomunicado VALUES ('$idComunicado','$usuario')";
    $rs = mysqli_query($conexao, $sql);

    if($rs){
        print "true";
    } else {
        print "false";
    }
?>
