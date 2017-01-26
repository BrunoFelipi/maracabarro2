<?php
    include '../../conexao.php';
    $data = json_decode(file_get_contents('php://input'), true);

    $idComunicado = $data['idComunicado'];
    $usuario = $data['usuario'];

    $sql = "SELECT * from curtidascomunicado where idComunicado='$idComunicado' AND usuario='$usuario'";

    $rs = mysqli_query($conexao, $sql);

    if(mysqli_num_rows($rs) == 0){
        echo 'false';
    } else {
        $json = array();
        while($arr = mysqli_fetch_assoc($rs)){
            $json[] = $arr;
        }

        echo(json_encode($json));
    }
?>
