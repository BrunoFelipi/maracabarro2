app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'views/home.html'
    })
    .when('/home', {
        templateUrl: 'views/home.html'
    })
    .when('/eventos', {
        templateUrl: 'views/eventos.html'
    })
    .when('/eventos/add', {
        templateUrl: 'views/addEvento.html'
    })
    .when('/eventos/edit/:id', {
        templateUrl: 'views/editEvento.html'
    })
    .when('/calendario', {
        templateUrl: 'views/calendario.html'
    })
    .when('/comunicados', {
        templateUrl: 'views/comunicados.html'
    })
    .when('/estatuto', {
        templateUrl: 'views/estatuto.html'
    })
    .when('/financas', {
        templateUrl: 'views/financas.html'
    })
    .when('/jogos', {
        templateUrl: 'views/jogos.html'
    })
    .when('/promocoes', {
        templateUrl: 'views/promocoes.html'
    })
});
