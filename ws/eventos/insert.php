<?php
    include '../conexao.php';
    $data = json_decode(file_get_contents('php://input'), true);

    $nome = $data['nome'];
    $descricao = $data['descricao'];
    $dia = $data['dia'];
    $ativo = 's';

    $sql = "INSERT INTO evento VALUES (0,'$nome','$descricao','$dia','$ativo')";
    $rs = mysqli_query($conexao, $sql);

    if($rs){
        print "true";
    } else {
        print "false";
    }
?>
