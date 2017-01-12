<?php
    include '../conexao.php';
    $data = json_decode(file_get_contents('php://input'), true);

    $titulo = $data['titulo'];
    $conteudo = $data['conteudo'];    
    $usuario = $data['usuario'];
    $datahora = 'now()';

    $sql = "INSERT INTO comunicados VALUES (0,'$titulo','$conteudo','$usuario',$datahora,'s')";
    $rs = mysqli_query($conexao, $sql);

    if($rs){
        print "true";
    } else {
        print "false";
    }
?>
