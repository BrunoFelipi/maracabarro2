app.factory('ComunicadosService', function ($http) {
    return {

        addComunicado: function (comunicado, usuario) {
            comunicado.usuario = usuario;
            return $http({
                method: 'post',
                url: 'ws/comunicados/addComunicado.php',
                data: comunicado
            });
        },

        editar: function (comunicado, usuario) {
            comunicado.usuario = usuario;
            return $http({
                method: 'post',
                url: 'ws/comunicados/editar.php',
                data: { comunicado }
            });
        },

        excluir: function (id) {
            return $http({
                method: 'post',
                url: 'ws/comunicados/excluir.php',
                data: { id }
            });
        },

        getComunicados: function () {
            return $http({
                method: 'post',
                url: 'ws/comunicados/getComunicados.php'                
            });
        },

        getQtdCurtidas: function (idComunicado) {
            return $http({
                method: 'post',
                url: 'ws/comunicados/curtidas/selectCurtidas.php',
                data: { idComunicado: idComunicado }
            });
        },

        addCurtida: function (idComunicado, usuario) {
            return $http({
                method: 'post',
                url: 'ws/comunicados/curtidas/addCurtida.php',
                data: { idComunicado: idComunicado, usuario: usuario }
            });
        },

        addComentario: function (idComunicado, comentario, usuario) {            
            return $http({
                method: 'post',
                url: 'ws/comunicados/comentarios/addComentario.php',
                data: { comentario: comentario, idComunicado: idComunicado, usuario: usuario }
            });
        },

        existComunicado: function (idComunicado) {            
            return $http({
                method: 'post',
                url: 'ws/comunicados/existComunicado.php',
                data: { idComunicado: idComunicado }
            });
        },

    };
});
