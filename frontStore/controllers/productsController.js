app.controller("productsController", function ($scope, $state,$stateParams, productsService) {

    // Products Service ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // $scope.currentProduct = productsService.getCurrentProduct();
    $scope.currentProduct = null;
    $scope.page = 8;

     if ($stateParams.id != null && $stateParams.id != undefined) {
        productsService.getProduct($stateParams.id).then(function (response) {
            $scope.currentProduct = response.data;
        })
    }

    productsService.getProducts().then(function(response) {
        $scope.products = response.data;
        $scope.heels = [];
        $scope.sneakers = [];
        $scope.sandals = [];
        $scope.glasses = [];
        $scope.shoes = [];
        for (var i = 0; i < $scope.products.length; i++)
        {
            if ($scope.products[i].product_Category === "Heels")
            {
                $scope.heels.push($scope.products[i]);
            }
            if ($scope.products[i].product_Category === "Sandals")
            {
                $scope.sandals.push($scope.products[i]);
            }
            if ($scope.products[i].product_Category === "Sneakers")
            {
                $scope.sneakers.push($scope.products[i]);
            }
            if ($scope.products[i].product_Category === "Heels" || $scope.products[i].product_Category === "Sandals" || $scope.products[i].product_Category === "Sneakers")
            {
                $scope.shoes.push($scope.products[i]);
            }
            if ($scope.products[i].product_Category === "Glasses")
            {
                $scope.glasses.push($scope.products[i]);
            }
        }
        console.log($scope.products);
    })

    $scope.getProduct = function(product) {
        $state.go("product", { id: product.id})
    }

    $scope.moreProducts = function(products) {
        if($scope.page < products.length) {
            $scope.page = $scope.page + 8;
        }
    }

    $scope.lessProducts = function() {
        if($scope.page > 0) {
            $scope.page = $scope.page - 8;
        }
    }
})