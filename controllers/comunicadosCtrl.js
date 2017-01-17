app.controller('comunicadosCtrl', function ($scope, $rootScope, $routeParams, ComunicadosService, toastr, $location, $filter) {

    $scope.usuarioAtivo = $rootScope.usuarioAtivo;
    $scope.qtdComentarios = 0;
    $scope.qtdCurtidas = 0;

    var promise = ComunicadosService.getComunicados();
    promise.then(function (response) {
        $scope.comunicados = response.data;
    }, function (error) {
        Materialize.toast('Erro de conexão com o<br>servidor', 4000);
    });

    /*
        $scope.getQtdCurtidas = function (idComunicado) {
            var promise = ComunicadosService.getQtdCurtidas(idComunicado);
            promise.then(function (response) {
                $scope.qtdCurtidas = response.data[0].qtdCurtidas;
            }, function (error) {
                Materialize.toast('Erro de conexão com o<br>servidor', 4000);
            });
        }
    */
    $scope.addCurtida = function (idComunicado, qtdCurtidas) {
        var promise = ComunicadosService.addCurtida($routeParams.id, 'bruno');
        promise.then(function (response) {
            console.log(response.data);
            if (response.data == 'true') {

                var qtdCurt = parseInt($scope.qtdCurtidas) + 1;                
                var promise = ComunicadosService.updateQtdCurtidas($routeParams.id, qtdCurt);
                promise.then(function (response) {
                    if (response.data == 'true') {
                          
                    } else {
                        Materialize.toast('Erro ao curtir comunicado', 2000);        
                    }
                }, function (error) {
                    Materialize.toast('Erro de conexão com o<br>servidor', 4000);
                });
            } else {
                Materialize.toast('Erro ao curtir comunicado', 2000);
            }
        }, function (error) {
            Materialize.toast('Erro de conexão com o<br>servidor', 4000);
        });
    }

    //$scope.getQtdCurtidas();

    $scope.addComunicado = function (comunicado) {

        var promise = ComunicadosService.addComunicado(comunicado, 'bruno');
        promise.then(function (response) {
            if (response.data == 'true') {
                Materialize.toast('Comunicado adicionado<br>com sucesso', 2000);
                $location.path('/comunicados');
            } else {
                Materialize.toast('Erro ao adicionar<br>comunicado', 2000);
            }
        }, function (error) {
            Materialize.toast('Erro de conexão com o<br>servidor', 4000);
        });
    }

});
