(function () {
  "use strict";

  function MainController($scope) {}

  function CurrentController($scope, $state) {}

  function HistoryController($scope, $state) {}

  angular.module("app")
    .controller("MainController", ["$scope", MainController])
    .controller("CurrentController", ["$scope", "$state", CurrentController])
    .controller("HistoryController", ["$scope", "$state", HistoryController]);

})();