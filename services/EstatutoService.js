app.factory('EstatutoService', function($http){
    return {
        insert: function(idUsuario, concorda, opiniao){
            return $http({
                method: 'post',
                url: 'ws/estatuto/insert.php',
                data: {idUsuario: idUsuario, concorda: concorda, opiniao: opiniao}
            });
        },
        selectAll: function(){
            return $http({
                method: 'post',
                url: 'ws/email/selectAll.php'
            });
        },
        usuarioConcorda: function(idUsuario){
            return $http({
                method: 'post',
                url: 'ws/estatuto/usuarioConcorda.php',
                data: {idUsuario: idUsuario}
            });
        }
    };
});
