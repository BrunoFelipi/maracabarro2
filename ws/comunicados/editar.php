<?php
    include '../conexao.php';
    $data = json_decode(file_get_contents('php://input'), true);

    $id = $data['id'];
    $titulo = $data['titulo'];
    $conteudo = $data['conteudo'];    
    $data = 'NOW()';
    $usuario =  $data['usuario'];
    $ativo = '1';

    $sql = "UPDATE comentarios SET titulo='$titulo', conteudo='$conteudo', data=$data, usuario='$usuario', ativo='$ativo'' where id=$id";
    $rs = mysqli_query($conexao, $sql);

    if($rs){
        print "true";
    } else {
        print "false";
    }
?>
