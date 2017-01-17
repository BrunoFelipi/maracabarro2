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

        addComentario: function (idComunicado, texto, usuario) {
            return $http({
                method: 'post',
                url: 'ws/comunicados/comentarios/addComentario.php',
                data: { idComunicado: idComunicado, texto: texto, usuario: usuario }
            });
        },

        existComunicado: function (idComunicado) {
            return $http({
                method: 'post',
                url: 'ws/comunicados/existComunicado.php',
                data: { idComunicado: idComunicado }
            });
        },

        getComentarios: function (idComunicado) {
            return $http({
                method: 'post',
                url: 'ws/comunicados/comentarios/selectComentarios.php',
                data: { idComunicado: idComunicado }
            });
        },

        getQtdComentarios: function (idComunicado) {
            return $http({
                method: 'post',
                url: 'ws/comunicados/comentarios/getQtdComentarios.php',
                data: { idComunicado: idComunicado }
            });
        },

        updateQtdComentarios: function (idComunicado, qtdComentarios) {
            return $http({
                method: 'post',
                url: 'ws/comunicados/comentarios/updateQtdComentarios.php',
                data: { idComunicado: idComunicado, qtdComentarios: qtdComentarios }
            });
        },

        updateQtdCurtidas: function (idComunicado, qtdCurtidas) {
            return $http({
                method: 'post',
                url: 'ws/comunicados/curtidas/updateQtdCurtidas.php',
                data: { idComunicado: idComunicado, qtdCurtidas: qtdCurtidas }
            });
        },

        usuarioCurtiu: function (idComunicado, usuario) {
            return $http({
                method: 'post',
                url: 'ws/comunicados/curtidas/usuarioCurtiu.php',
                data: { idComunicado: idComunicado, usuario: usuario }
            });
        },

        todasCurtidas: function (idComunicado) {
            return $http({
                method: 'post',
                url: 'ws/comunicados/curtidas/todasCurtidas.php',
                data: { idComunicado: idComunicado }
            });
        },

    };
});
