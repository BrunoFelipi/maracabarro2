<?php
    include '../conexao.php';

    $sql = "select * from comunicados;";

    $rs = mysqli_query($conexao, $sql);
    
    $json = array();
    while($arr = mysqli_fetch_assoc($rs)){
        $json[] = $arr;
    }

    echo(json_encode($json));
    
?>
