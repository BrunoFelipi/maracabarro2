app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'views/home.html'
    })
    .when('/home', {
        templateUrl: 'views/home.html'
    })
    .when('/eventos', {
        templateUrl: 'views/eventos/eventos.html'
    })
    .when('/eventos/add', {
        templateUrl: 'views/eventos/addEvento.html'
    })
    .when('/eventos/edit/:id', {
        templateUrl: 'views/eventos/editEvento.html'
    })
    .when('/calendario', {
        templateUrl: 'views/calendario.html'
    })
    .when('/comunicados', {
        templateUrl: 'views/comunicados/comunicados.html'
    })
    .when('/comunicados/add', {
        templateUrl: 'views/comunicados/addComunicado.html'
    })
    .when('/comunicados/edit/:id', {
        templateUrl: 'views/comunicados/editComunicado.html'
    })
    .when('/comunicados/:id', {
        templateUrl: 'views/comunicados/comunicadoView.html'
    })
    .when('/estatuto', {
        templateUrl: 'views/estatuto/estatuto.html'
    })
    .when('/financas', {
        templateUrl: 'views/financas/financas.html'
    })
    .when('/jogos', {
        templateUrl: 'views/jogos/jogos.html'
    })
    .when('/promocoes', {
        templateUrl: 'views/promocoes/promocoes.html'
    })


});
