<?php
    include '../conexao.php';

    $sql = "SELECT id, tipo, nome, descricao, dia, valor, ativo FROM evento order by id desc";

    $rs = mysqli_query($conexao, $sql);

    $json = array();
    while($arr = mysqli_fetch_assoc($rs)){
        $json[] = $arr;
    }

    echo(json_encode($json));
?>
