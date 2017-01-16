app.controller('comunicadoViewCtrl', function ($scope, $route, $rootScope, $routeParams, ComunicadosService, toastr, $location, $filter) {

    $scope.usuarioAtivo = $rootScope.usuarioAtivo;
    $scope.comentarios = {};
    $scope.qtdComentarios = 0;
    $scope.qtdCurtidas = 0;

    /* Valida se o comunicado aberto existe */
    var promise = ComunicadosService.existComunicado($routeParams.id);
    promise.then(function (response) {

        if (response.data == 'false') {
            Materialize.toast('Comunicado não existe', 2000);
            $location.path('/comunicados');
        } else {
            $scope.comunicado = response.data[0];
            console.log($scope.comunicado);
            $scope.qtdComentarios = response.data[0].qtdComentarios;
            $scope.qtdCurtidas = response.data[0].qtdCurtidas;
        }
    }, function (error) {
        Materialize.toast('Erro de conexão com o<br>servidor', 4000);
    });

    /* Retorna a quantidade de comentarios que o comunicado tem */
    var promise = ComunicadosService.getQtdComentarios($routeParams.id);
    promise.then(function (response) {
        if (response.data == 'false') {
            $scope.qtdComentarios = 0;
        } else {
            $scope.qtdComentarios = response.data[0].qtdComentarios;
        }
    }, function (error) {
        Materialize.toast('Erro de conexão com o<br>servidor', 4000);
    });

    /* Carrega todos os comentários do comunicado aberto */
    var promise = ComunicadosService.getComentarios($routeParams.id);
    promise.then(function (response) {

        if (response.data == 'false') {
            $scope.comentarios = "";
        } else {
            $scope.comentarios = response.data;
        }

    }, function (error) {
        Materialize.toast('Erro de conexão com o<br>servidor', 4000);
    });

    $scope.addComentario = function (texto) {

        var promise = ComunicadosService.addComentario($routeParams.id, texto, 'bruno');
        promise.then(function (response) {
            if (response.data == 'true') {

                var qtdComents = parseInt($scope.qtdComentarios) + 1;                
                var promise = ComunicadosService.updateQtdComentarios($routeParams.id, qtdComents);
                promise.then(function (response) {
                    if (response.data == 'true') {
                        $route.reload();     
                    } else {
                        Materialize.toast('Erro ao inserir comentário', 2000);        
                    }
                }, function (error) {
                    Materialize.toast('Erro de conexão com o<br>servidor', 4000);
                });
            } else {
                Materialize.toast('Erro ao inserir comentário', 2000);
            }
        }, function (error) {
            Materialize.toast('Erro de conexão com o<br>servidor', 4000);
        });

    }

});
