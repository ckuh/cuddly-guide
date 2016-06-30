(function() {
  'use strict'

  angular
  .module('cuddly-guide')
    .config(config);

    function config ($stateProvider, $urlRouterProvider, $httpProvider) {
      $stateProvider
        .state('home', {
          url: '/home',
          auth: false,
          templateUrl: '../pages/cuddly-guide.home/templates/home.html',
          controller: 'HomeController as vm'
        })

      $urlRouterProvider
        .otherwise('/home');
    }

})();
