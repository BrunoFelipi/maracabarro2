app.factory('EventosService', function($http){
    return {
        insert: function(nome, descricao, dia){
            return $http({
                method: 'post',
                url: 'ws/eventos/insert.php',
                data: {nome: nome, descricao: descricao, dia: dia}
            });
        },
        selectAll: function(){
            return $http({
                method: 'post',
                url: 'ws/eventos/selectAll.php'
            });
        },
        delete: function(id){
            return $http({
                method: 'post',
                url: 'ws/eventos/delete.php',
                data: {id: id}
            });
        },
        usuarioPagou: function(idUsuario, idEvento){
            return $http({
                method: 'post',
                url: 'ws/eventos/usuarioPagou.php',
                data: {idUsuario: idUsuario, idEvento: idEvento}
            });
        }
    };
});
