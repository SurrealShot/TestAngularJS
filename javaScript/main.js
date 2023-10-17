//setting up angular module
var app = angular.module("app",[]); 


//setting up the controller
app.controller("main",["$scope", "$http", function($scope,$http){ 

    $scope.page = 1; //current page to display
    $scope.selected = 0; //amount of selected items
    $scope.rating = 0; //current rating selected
    $scope.hover = 0; //current rating being hovered

    //retrieves the product list
    $http.get("../products/ProductList.json") 
            .then(function (data) {
                $scope.products = data.data;
            }
            ,function () {
                console.log("there was an error");
            });
    
    //changing amount of product the customer selected by 'a' amount
    $scope.prodAmountChange = function(id,a){
        if(a != 0)
        {
            if(!$scope.products[id].amount)
            {
                $scope.products[id].amount = a;
                $scope.selected ++;
            }
            else
            {
                $scope.products[id].amount += a;
                if($scope.products[id].amount == 0){$scope.selected --;}
            }
        }

    };

    //checkout to the basket screen saving the products selected by the customer in the cart
    $scope.checkout = function(){
        $scope.cart = [];
        for(var i = 0; i < $scope.products.length; i++)
        {
            if($scope.products[i].amount && $scope.products[i].amount > 0)
            {
                var item = {}
                item.name = $scope.products[i].name;
                item.img = $scope.products[i].img;
                item.price = $scope.products[i].price * $scope.products[i].amount;
                item.amount = $scope.products[i].amount;
                $scope.cart.push(item);
            }
        }
            $scope.changePage(2);
    };

    //changing the viewed page
    $scope.changePage = function(p){  
        $scope.page = p;
    };

    //calculating the total price based on the products in the cart
    $scope.totalPrice = function(){
        var price = 0;
        for(var i = 0; i < $scope.cart.length; i++)
        {
            price += $scope.cart[i].price;
        }
        return price;
    };

    //set rating and hover based on the inputs on the stars 
    $scope.setRating = function(a){
        $scope.rating = a;
    }
    $scope.setHover = function(a){
        $scope.hover = a;
    }
}]);

//Diferent Directives returning the separate HTML files

app.directive('myHeader', function() {
    return {
        templateUrl: "../pages/Header.html"
    };
 });

 app.directive('checkout', function() {
    return {
        templateUrl: "../pages/Checkout.html"
    };
 });

 app.directive('basket', function() {
    return {
        templateUrl: "../pages/Basket.html"
    };
 });
 app.directive('vending', function() {
    return {
        templateUrl: "../pages/Vending.html"
    };
 });