var app = angular.module("discountStore", ["ui.router"])

app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state("home", {
            url: '/',
            templateUrl: "./views/home.html",
            controller: "productsController"
        })
        .state("login", {
            url: '/login',
            templateUrl: "./views/login.html",
            controller: "productsController"
        })
        .state("product", {
            url: '/product/:id',
            templateUrl: "./views/product.html",
            controller: "productsController"
        })
        .state("heels", {
            url: '/heels',
            templateUrl: "./views/heels.html",
            controller: "productsController"
        })
        .state("athletic", {
            url: '/athletic',
            templateUrl: "./views/athletic.html",
            controller: "productsController"
        })
        .state("flats", {
            url: '/flats',
            templateUrl: "./views/flats.html",
            controller: "productsController"
        })
        .state("sandals", {
            url: '/sandals',
            templateUrl: "./views/sandals.html",
            controller: "productsController"
        })
        .state("sneakers", {
            url: '/sneakers',
            templateUrl: "./views/sneakers.html",
            controller: "productsController"
        })
        .state("shoes", {
            url: '/shoes',
            templateUrl: "./views/shoes.html",
            controller: "productsController"
        })
        .state("register", {
            url: '/register',
            templateUrl: './views/register.html',
            controller: "productsController"
        })
})