app.controller('homeCtrl',function($scope, CalendarioService, ComunicadosService, EstatutoService, EventosService, FinancasService, JogosService
    , PromocoesService, toastr, $location, $filter){

    $scope.comunicados;

    var promise = ComunicadosService.getComunicados();
    promise.then(function (response) {
        $scope.comunicados = response.data;
    }, function (error) {
        Materialize.toast('Erro de conexão com o<br>servidor', 4000);
    });

    $scope.enviarEstatuto = function(){
        console.log($scope.concordo);
    }

});
