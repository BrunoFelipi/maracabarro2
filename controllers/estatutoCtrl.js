app.controller('estatutoCtrl', function ($scope, EstatutoService, toastr, $location, $filter) {

    $scope.enviarEstatuto = function () {

        if ($scope.concordo == undefined) {
            $scope.concordo = 's';
        }

        if ($scope.concordo == 's') {
            
            var promise = EstatutoService.insert(1, 's', '');
            promise.then(function (response) {
            
                if (response.data == 'true') {
                    alert("Obrigado por ");
                }

            }, function (error) {
                Materialize.toast('Erro de conexão com o<br>servidor', 4000);
            });

        } else if($scope.concordo == 'n'){
            
            var promise = EstatutoService.insert(1, 'n', $scope.opiniao);
            promise.then(function (response) {
            
                if (response.data == 'true') {
                    alert("Agradecemos pela sua opinião.");
                }

            }, function (error) {
                Materialize.toast('Erro de conexão com o<br>servidor', 4000);
            });

        }

    }

});
