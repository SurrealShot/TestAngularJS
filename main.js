//setting up angular module
var app = angular.module("app",['ngRoute']); 

app.config(function($routeProvider){
    $routeProvider.when('/',{
        templateUrl : '../pages/checkout/Checkout.html',
        controller: 'checkout'
    }).when('/basket/',{
        templateUrl : '../pages/basket/Basket.html',
        controller: 'basket'
    }).when('/vending/',{
        templateUrl : '../pages/vending/Vending.html',
        controller: 'vending'
    })
});

