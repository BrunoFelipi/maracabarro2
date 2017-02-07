app.controller('estatutoCtrl', function ($scope, EstatutoService, toastr, $location, $filter) {

    var promise = EstatutoService.jaRespondeu(1);
    promise.then(function (response) {
        if(response.data != 'false'){
            $scope.respondeu = true;
        } else {
            $scope.respondeu = response.data;
        }
        
    }, function (error) {
        Materialize.toast('Erro de conexão com o<br>servidor', 4000);
    });


    $scope.enviarEstatuto = function () {

        if ($scope.concordo == undefined) {
            $scope.concordo = 's';
        }

        if ($scope.concordo == 's') {
            
            var promise = EstatutoService.insert(1, 's', '');
            promise.then(function (response) {
            
                if (response.data == 'true') {                    
                    toastr.success("Obrigado por responder o Estatuto");
                    $location.path("home");
                }

            }, function (error) {
                Materialize.toast('Erro de conexão com o<br>servidor', 4000);
            });

        } else if($scope.concordo == 'n'){
            
            var promise = EstatutoService.insert(1, 'n', $scope.opiniao);
            promise.then(function (response) {
            
                if (response.data == 'true') {
                    toastr.success("Agradecemos pela sua opinião");
                    $location.path("home");
                }

            }, function (error) {
                Materialize.toast('Erro de conexão com o<br>servidor', 4000);
            });

        }

    }

});
