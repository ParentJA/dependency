(function () {
  "use strict";

  function MainController($scope) {}

  function StateController($scope, $state) {}

  angular.module("app")
    .controller("MainController", ["$scope", MainController])
    .controller("StateController", ["$scope", "$state", StateController]);
  
})();