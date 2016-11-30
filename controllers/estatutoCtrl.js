app.controller('estatutoCtrl',function($scope, EstatutoService, toastr, $location, $filter){

    $scope.concordo = false;

    $scope.clicar1 = function() {

        $scope.concordo = true;
    }

    $scope.clicar2 = function() {

        $scope.concordo = false;
    }

});
