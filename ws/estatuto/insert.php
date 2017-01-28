<?php
    include '../conexao.php';
    $data = json_decode(file_get_contents('php://input'), true);

    $idUsuario = $data['idUsuario'];
    $concorda = $data['concorda'];
    $opiniao = $data['opiniao'];
    $datahora = 'now()';

    $sql = "INSERT INTO estatuto VALUES (0,'$idUsuario','$concorda','$opiniao',$datahora)";
    $rs = mysqli_query($conexao, $sql);

    if($rs){
        print "true";
    } else {
        print "false";
    }
?>
