app.controller('comunicadosCtrl', function ($scope, $rootScope, $routeParams, ComunicadosService, toastr, $location, $filter) {

    $scope.usuarioAtivo = $rootScope.usuarioAtivo;

    var promise = ComunicadosService.getComunicados();
    promise.then(function (response) {
        $scope.comunicados = response.data;
    }, function (error) {
        Materialize.toast('Erro de conexão com o<br>servidor', 4000);
    });

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
