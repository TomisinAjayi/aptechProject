var myapp = angular.module("festivals", ['ngRoute']);

myapp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "../views/home.html",
            controller: 'festivalCtrl'
        })
        .when("/gallery", {
            templateUrl: "../views/gallery.html",
            controller: 'festivalCtrl'
        })
        .when("/about", {
            templateUrl: "../views/about.html",
            controller: 'festivalCtrl'
        })
        .when("/contact", {
            templateUrl: "../views/contact.html",
            controller: 'festivalCtrl'
        })
        .when("/food", {
            templateUrl: "../views/food.html",
            controller: 'festivalCtrl'
        })
        .when("/religious", {
            templateUrl: "../views/religious.html",
            controller: 'festivalCtrl'
        })
        .when("/art", {
            templateUrl: "../views/art.html",
            controller: 'festivalCtrl'
        })
        .when("/seasonal", {
            templateUrl: "../views/seasonal.html",
            controller: 'festivalCtrl'
        })
        .when("/checkout", {
            templateUrl: "../views/checkout.html",
            controller: 'festivalCtrl'
        })
        .otherwise({
            redirectTo: "/home"
        });
}]);

myapp.controller("festivalCtrl", function ($scope, $route, $routeParams) {

});


var myUl = document.getElementById("myUl");
var searchInput = document.getElementById("search-input");

searchInput.addEventListener("focus", function () {
    myUl.style.display = "block";
});




