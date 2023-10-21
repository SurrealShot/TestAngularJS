app.service("productService",['$http',function($http,){

    //gets products from json file
    this.getProducts = function(calback){
        var amount = 0;
        if(this.products == null)
        {
            $http.get("../products/ProductList.json") 
            .then(function (data) {
                this.products = data.data;
                 calback(data.data,amount);
            }
            ,function () {
                console.log("there was an error retrieving the products");
            });
        }
        else
        {
            this.products.forEach(element => {
                if(element.amount || element.amount > 0){ amount++;}
            });
            calback(this.products,amount);
        }
       
    }

    //transforms a list of products into a cart
    this.checkout = function(products){
        this.products = products;
        this.cart = [];
        for(var i = 0; i < products.length; i++)
        {
            if(products[i].amount && products[i].amount > 0)
            {
                var item = {}
                item.name = products[i].name;
                item.img = products[i].img;
                item.price = products[i].price * products[i].amount;
                item.amount = products[i].amount;
                this.cart.push(item);
            }
        }
    }

    //calculates total price of a cart
    this.getTotalPrice = function(){
        var price = 0;
        for(var i = 0; i < this.cart.length; i++)
        {
            price += this.cart[i].price;
        }
        return price;
    }
}]);