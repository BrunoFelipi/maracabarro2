<?php
    include '../../conexao.php';
    $data = json_decode(file_get_contents('php://input'), true);

    $idComunicado = $data['idComunicado'];
    $qtdCurtidas = $data['qtdCurtidas'];

    $sql = "UPDATE comunicados set qtdCurtidas='$qtdCurtidas'";
    $rs = mysqli_query($conexao, $sql);

    if($rs){
        print "true";
    } else {
        print "false";
    }
?>
