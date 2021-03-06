app.controller('editComunicadoCtrl', function ($scope, $rootScope, $routeParams, ComunicadosService, toastr, $location, $filter) {

    $scope.usuarioAtivo = $rootScope.usuarioAtivo;
    $scope.comunicado = [];

    var promise = ComunicadosService.existComunicado($routeParams.id);
    promise.then(function (response) {
        if (response.data == 'false') {
            Materialize.toast('Comunicado não existe', 2000);
            $location.path('/comunicados');
        } else {
            $scope.comunicado = response.data[0];
       }
    }, function (error) {
        Materialize.toast('Erro de conexão com o<br>servidor', 4000);
    });

    $scope.editComunicado = function () {

        var titulo = $("#titulo").val();
        var conteudo = $("#conteudo").val();

        var promise = ComunicadosService.editComunicado($routeParams.id, titulo, conteudo, 'Bruno');
        promise.then(function (response) {
            
            if(response.data == 'true'){
                $location.path('comunicados');
                toastr.success('Comunicado editado com sucesso');
            } else {
                toastr.success('Erro ao editar comunicado');
            }     
            
        }, function (error) {
            Materialize.toast('Erro de conexão com o<br>servidor', 4000);
        });
    }

    $scope.cancelEditComunicado = function () {
        $location.path("comunicados");
    }

});
