app.controller("checkout",["$scope", "routingService","productService", function($scope,routingService,productService){

    $scope.selected = 0; //amount of selected items

    //retrieves the product list
    productService.getProducts(function(prods,amount){$scope.products = prods;$scope.selected = amount;});
    
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
        productService.checkout($scope.products);
        routingService.changePage('/basket/');
    };

}]);