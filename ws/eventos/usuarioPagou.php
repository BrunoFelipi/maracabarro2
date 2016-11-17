<?php
    include '../conexao.php';
    $data = json_decode(file_get_contents('php://input'), true);

    $idUsuario = $data['idUsuario'];
    $idEvento = $data['idEvento'];

    $sql = "UPDATE participantesEventos SET id_usuario=$idUsuario, tipo='$tipo', titulo='$titulo', conteudo='$conteudo', tag='$tag', data=$data, ativo=$ativo where id=$idPublicacao";
    $rs = mysqli_query($conexao, $sql);

    if($rs){
        print "true";
    } else {
        print "false";
    }
?>
