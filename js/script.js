
var app = angular.module("computer",["ngRoute"])
    .config(["$routeProvider", function($routeProvider){
        $routeProvider.
            when("/main", {
                templateUrl: "views/main.html",
                controller: "MainCtrl"
            }).
            when("/about", {
                templateUrl: "views/about.html",
                controller: "MainCtrl"
            }).
            when("/service", {
                templateUrl: "views/service.html",
                controller: "ServicesCtrl"
            }).
            when("/contact", {
                templateUrl: "views/contact.html",
                controller: "ContactCtrl"
            }).
            otherwise({redirectTo: "/main"})
    }])
    .controller('MainCtrl',['$scope','$http',function($scope, $http){
        $http.get("data/services.json").then(function(response){
            $scope.services = response.data;
        })
    }])
    .controller('ServicesCtrl',['$scope','$http',function($scope, $http){
        $http.get("data/services.json").then(function(response){
            $scope.services = response.data;
        })
    }])
    .controller('ContactCtrl',['$scope','$http',function($scope, $http){
        $http.get("data/locations.json").then(function(response){
            $scope.locations = response.data;
        })
    }]);


