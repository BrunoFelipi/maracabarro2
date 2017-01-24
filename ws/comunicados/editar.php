<?php
    include '../conexao.php';
    $data = json_decode(file_get_contents('php://input'), true);

    $id = $data['id'];
    $titulo = $data['titulo'];
    $conteudo = $data['conteudo'];  
    $dataP = 'NOW()';      
    $usuario =  $data['usuario'];    

    $sql = "UPDATE comunicados SET titulo='$titulo', conteudo='$conteudo', usuarioResponsavel='$usuario' where id=$id";
    $rs = mysqli_query($conexao, $sql);

    if($rs){
        print "true";
    } else {
        print "false";
    }
?>
