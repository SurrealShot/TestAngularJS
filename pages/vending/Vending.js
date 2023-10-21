app.controller("vending",["$scope","productService", function($scope,productService){

    $scope.cart = productService.cart;

    $scope.rating = 0; //current rating selected
    $scope.hover = 0; //current rating being hovered


    //set rating and hover based on the inputs on the stars 
    $scope.setRating = function(a){
        $scope.rating = a;
    }
    $scope.setHover = function(a){
        $scope.hover = a;
    }
}]);