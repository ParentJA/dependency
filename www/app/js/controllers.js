(function () {
  "use strict";

  function MainController($scope) {}

  function CurrentController($scope, $state, WeatherService) {
    $scope.temperature = 17;
  }

  function HistoryController($scope, $state, WeatherService) {
    $scope.minimumTemperature = 15;
    $scope.weather = WeatherService.weather;
  }

  angular.module("app")
    .controller("MainController", ["$scope", MainController])
    .controller("CurrentController", ["$scope", "$state", "WeatherService", CurrentController])
    .controller("HistoryController", ["$scope", "$state", "WeatherService", HistoryController]);

})();