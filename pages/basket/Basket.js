app.controller("basket",["$scope", "routingService","productService", function($scope,routingService,productService){

    $scope.cart = productService.cart;

    $scope.totalPrice = productService.getTotalPrice();

    //changes to the page depending on the button selected
    $scope.changePage = function(a){
        if(a == 0)
        {
            routingService.changePage('/');
        }
        else
        {
            routingService.changePage('/vending/');
        }
        
    };

}]);