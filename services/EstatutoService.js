app.factory('EstatutoService', function($http){
    return {
        insert: function(email){
            return $http({
                method: 'post',
                url: 'ws/email/cadastrarEmail.php',
                data: {email: email}
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
