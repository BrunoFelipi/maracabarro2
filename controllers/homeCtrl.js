app.controller('homeCtrl',function($scope, CalendarioService, ComunicadosService, EstatutoService, EventosService, FinancasService, JogosService
    , PromocoesService, toastr, $location, $filter){

    $scope.enviarEstatuto = function(){
        console.log($scope.concordo);
    }

});
