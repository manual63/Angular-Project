var angularProject = angular.module('AngularProject', ['ngRoute', 'MenuService']);

/**
 * Configure the Routes
 */
angularProject.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Landing Page
    .when("/", {templateUrl: "views/landing.html", controller: "LandingController"})
    // Pages
    .when("/about", {templateUrl: "views/about.html", controller: "AboutController"})
    .when("/404", {templateUrl: "views/404.html", controller: "ErrorController"})
    // else 404
    .otherwise({redirectTo: "/404"});
}]);