angular.module('website', []).
config(function ($routeProvider) {
 $routeProvider.
  when('/home', {templateUrl:'partials/home.html' }).
  when('/about', {templateUrl:'partials/about.html'}).
  when('/routing', {templateUrl:'partials/routing.html'}).
  when('/controller', {templateUrl:'partials/controller.html', controller: ControllerCntl}).
  otherwise({redirectTo:'/home', templateUrl:'partials/home.html'});
});

function MainControler($scope, $location, $routeParams) {
    $scope.setRoute = function(route) {
    $location.path(route);
  };
}

function ControllerCntl($scope, $routeParams) {
  $scope.name = "ControllerCntl";
  $scope.params = $routeParams;
  $scope.loc = document.location.href;
}