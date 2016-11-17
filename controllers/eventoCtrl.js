app.controller('eventosCtrl',function($scope, $rootScope, EventosService, toastr, $location, $filter){

    $scope.usuarioLogado = $rootScope.usuario;

    $scope.eventos = [];
    $scope.eventoModal = {};

    var promise = EventosService.selectAll();

    promise.then(function(response){
        $scope.eventos = response.data;
    }, function(error){
        Materialize.toast('Erro de conexão com o servidor',2000);
    });

    $scope.setEventoModal = function(evento) {
        $scope.eventoModal = evento;
    }

    $scope.confirmarPresenca = function(idEvento, idUsuario){
        alert('Evento ' + idEvento + ' confirmado pelo usuario ' + idUsuario);
    }

    $scope.recusar = function (idEvento, idUsuario) {
        alert('Evento ' + idEvento + ' recusado pelo usuario ' + idUsuario);
    }

    $scope.closeModal = function(){
        $('#modalEvento').closeModal();
    }

    $scope.addEvento = function(){
        $('#modalAddEvento').openModal();
    }

    $scope.closeModalAddEvento = function(){
        $('#modalAddEvento').closeModal();
    }

});
