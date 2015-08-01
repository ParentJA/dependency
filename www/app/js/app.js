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
      .state("current", {
        url: "/current",
        templateUrl: "/static/views/current.html",
        controller: "CurrentController"
      })
      .state("history", {
        url: "/history",
        templateUrl: "/static/views/history.html",
        controller: "HistoryController"
      });

    //Default state...
    $urlRouterProvider.otherwise("/current");
  }

  angular.module("app", ["restangular", "ui.router"])
    .constant("BASE_URL", "/api/v1/")
    .config(["RestangularProvider", RestangularConfig])
    .config(["$stateProvider", "$urlRouterProvider", UiRouterConfig]);

})();