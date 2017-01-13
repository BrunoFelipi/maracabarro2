<?php
    include '../conexao.php';
    $data = json_decode(file_get_contents('php://input'), true);

    $titulo = $data['titulo'];
    $conteudo = $data['conteudo'];    
    
    $usuario = $data['usuario'];
    $datahora = 'now()';

    if(empty($data['importante'])){
        $importante = '0';
    } else {
        $importante = $data['importante'];
    }

    $sql = "INSERT INTO comunicados VALUES (0,'$titulo','$conteudo','$importante',$datahora,'$usuario','s')";
    $rs = mysqli_query($conexao, $sql);

    if($rs){
        print "true";
    } else {
        print "false";
    }
?>
