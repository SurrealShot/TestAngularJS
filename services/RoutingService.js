app.service("routingService",['$location',function($location){
    
    this.changePage =  function(page){
        $location.path(page);
    };
}]);