app.controller('homeCtrl',function($scope, CalendarioService, ComunicadosService, EstatutoService, EventosService, FinancasService, JogosService
    , PromocoesService, toastr, $location, $filter){

    $scope.comunicados;
    $scope.eventos;

    var promise = ComunicadosService.getComunicados();
    promise.then(function (response) {
        $scope.comunicados = response.data;
    }, function (error) {
        Materialize.toast('Erro de conexão com o<br>servidor', 4000);
    });

    var promise = EventosService.getEventos();
    promise.then(function (response) {
        $scope.eventos = response.data;
    }, function (error) {
        Materialize.toast('Erro de conexão com o<br>servidor', 4000);
    });

    var promise = EstatutoService.usuarioConcorda(1);
    promise.then(function (response) {   
        if(response.data != 'false'){
            $scope.respondeuEstatuto = response.data[0].concorda;         
        }     
        
    }, function (error) {
        Materialize.toast('Erro de conexão com o<br>servidor', 4000);
    });

    $scope.openEstatutoView = function(){
        $location.path('estatuto');
    }
    

    $scope.enviarEstatuto = function(){
        console.log($scope.concordo);
    }

});
