app.controller('comunicadoViewCtrl', function ($scope, $rootScope, $routeParams, ComunicadosService, toastr, $location, $filter) {

    $scope.usuarioAtivo = $rootScope.usuarioAtivo;

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

    $scope.addComentario = function (comentario) {
        
        var promise = ComunicadosService.addComentario($routeParams.id, comentario, 'bruno');
        promise.then(function (response) {
            console.log(response.data);
            if (response.data == 'true') {
                Materialize.toast('Comentario realizado com sucesso', 2000);
                
            } else {
                Materialize.toast('Erro ao comentar comunicado', 2000);                
            }
        }, function (error) {
            Materialize.toast('Erro de conexão com o<br>servidor', 4000);
        });

    }


});
