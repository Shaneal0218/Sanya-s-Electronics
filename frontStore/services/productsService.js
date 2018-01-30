app.service("productsService", function ($http) {
    
    var _currentProduct;
    var _currentCategory;

    var that = this;
 
    this.getProducts = function() {
        return $http.get("http://localhost:5000/api/products")
    }

    this.getProduct = function(id) {
        return $http.get("http://localhost:5000/api/products/" + id);
    }

    this.getCurrentProduct = function() {
        return _currentProduct;
    }

    this.setCurrentProduct = function(p) {
        _currentProduct = p;
    }

    this.getCurrentCategory = function() {
        return _currentCategory;
    }

    this.setCurrentCategory = function(c) {
        console.log(c);
        _currentCategory = c;
    }
})