<?php
    include '../conexao.php';
    $data = json_decode(file_get_contents('php://input'), true);

    $idComunicado = $data['idComunicado'];
    $usuario = $data['usuario'];
    $comentario = $data['comentario'];
    $dataComentario = 'NOW()';

    $sql = "INSERT INTO comentarioscomunicado VALUES (0,'$idComunicado','$usuario','$comentario','$dataComentario')";
    $rs = mysqli_query($conexao, $sql);

    if($rs){
        print "true";
    } else {
        print "false";
    }
?>
