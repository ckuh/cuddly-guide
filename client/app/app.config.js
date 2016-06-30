(function() {
  'use strict'

  angular
  .module('cuddly-guide')
    .config(config);

    function config ($stateProvider, $urlRouterProvider, $httpProvider) {
      $stateProvider
      
      $urlRouterProvider
        .otherwise('/');
    }

})();
