(function () {
  "use strict";

  function RestangularConfig(RestangularProvider) {
    RestangularProvider.setBaseUrl("/api/v1/");
    RestangularProvider.setRequestSuffix("/");
    RestangularProvider.setDefaultHttpFields({
      xsrfHeaderName: "X-CSRFToken",
      xsrfCookieName: "csrftoken"
    });
  }

  function UiRouterConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state("state", {
        url: "/state",
        templateUrl: "/static/views/state.html",
        controller: "StateController"
      });

    //Default state...
    $urlRouterProvider.otherwise("/state");
  }

  angular.module("app", ["restangular", "ui.router"])
    .constant("BASE_URL", "/api/v1/")
    .config(["RestangularProvider", RestangularConfig])
    .config(["$stateProvider", "$urlRouterProvider", UiRouterConfig]);

})();