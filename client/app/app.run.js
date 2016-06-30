(function() {
  'use strict'

  angular
  .module('cuddly-guide')
    .run(run);

    function run ($rootScope, $state) {
      $rootScope.$on('$stateChangeStart', function (event, to) {
        if(!to.auth) {
          return;
        }
      });
    }

})();
