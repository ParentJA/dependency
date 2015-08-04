(function () {
  "use strict";

  function plusFifteen() {
    return function(array) {
      return _.filter(array, function(n) {
        return n.temperature >= 15;
      });
    };
  }

  function minimum() {
    return function(array, minimum) {
      minimum = minimum || 15;
      return _.filter(array, function(n) {
        return n.temperature >= minimum;
      });
    };
  }

  angular.module("app")
    .filter("plusFifteen", [plusFifteen])
    .filter("minimum", [minimum]);

})();