(function () {
  "use strict";

  function RestangularFactory(Restangular) {
    return {
      list: function list() {
        return Restangular.all("weather").getList();
      },
      retrieve: function retrieve(id) {
        return Restangular.one("weather", id).get();
      },
      create: function create(data) {
        return Restangular.all("weather").post(data);
      },
      update: function update(id, data) {
        return Restangular.one("weather", id).customPUT(data);
      },
      destroy: function destroy(id) {
        return Restangular.one("weather", id).remove();
      }
    };
  }

  function WeatherService(RestangularFactory) {
    this.weather = RestangularFactory.list().$object;
  }

  angular.module("app")
    .factory("RestangularFactory", ["Restangular", RestangularFactory])
    .service("WeatherService", ["RestangularFactory", WeatherService]);

})();