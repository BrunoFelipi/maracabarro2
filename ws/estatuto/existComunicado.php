<?php
    include '../conexao.php';

    $data = json_decode(file_get_contents('php://input'), true);

    $idComunicado = $data['idComunicado'];

    $sql = "select * from comunicados where id=$idComunicado";

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
