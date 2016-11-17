app.factory('PromocoesService', function($http){
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
        existEmail: function(email){
            return $http({
                method: 'post',
                url: 'ws/email/existEmail.php'
            });
        }
    };
});
