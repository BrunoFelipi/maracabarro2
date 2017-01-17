<?php
    include '../../conexao.php';
    $data = json_decode(file_get_contents('php://input'), true);

    $idComunicado = $data['idComunicado'];
    $qtdComentarios = $data['qtdComentarios'];

    $sql = "UPDATE comunicados set qtdComentarios='$qtdComentarios' where id='$idComunicado'";
    $rs = mysqli_query($conexao, $sql);

    if($rs){
        print "true";
    } else {
        print "false";
    }
?>
