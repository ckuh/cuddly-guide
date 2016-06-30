(function() {
  'use strict'

  angular
  .module('cuddly-guide.home', [])
    .controller("HomeController", HomeController);

    function HomeController() {
      var vm = this;

      vm.todo = {};
      vm.sendData = function(){
        console.log("Sending Data!", vm.todo);
      }
    }

})();
