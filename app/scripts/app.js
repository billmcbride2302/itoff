(function() {
    function config($locationProvider, $stateProvider) {
        $locationProvider
            .html5Mode({
                 enabled: true,
                 requireBase: false
              });
 
         $stateProvider
            .state('home', {
                 url: '/',
                 templateUrl: '/templates/home.html'
             });
     }
     
    angular
         .module('itOff', ['ui.router', 'firebase'])
         .config(config)
 })();