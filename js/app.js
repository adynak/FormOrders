var formOrders = angular.module('formOrders', ['ngRoute', 'ngAnimate', 'toaster', 'ngTouch', 
                                         'ngMessages','ui.bootstrap']);

formOrders.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    
    $locationProvider.hashPrefix(''); 

    document.title = txtNavigation.siteTitle;
    $routeProvider.
        when('/success', {
            templateUrl: 'views/success.html',
            controller: 'SuccessController'
        }).
        when('/profile', {
            templateUrl: 'views/maintain/profile.html',
            controller: 'ProfileController'
        }).
        when('/category', {
            templateUrl: 'views/category.html',
            controller: 'CategoryController'
        }).
        when('/buildLocalLibrary', {
            templateUrl: 'views/buildLocalLibrary.html',
            controller: 'BuildLocalLibraryController'
        }).
        when('/customizeLibrary', {
            templateUrl: 'views/maintain/brand.html',
            controller: 'BrandController'
        }).    
        otherwise({
            redirectTo: '/success'
    });

}]).run(function($rootScope, $location, Data, $http) {
    $rootScope.$on("$routeChangeStart", function(event, next, current) {

    });
});
