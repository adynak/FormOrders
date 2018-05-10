formOrders.controller('BrandController', ['$scope', '$http', '$location', 'Data', '$rootScope', '$routeParams', 'toaster',
    function($scope, $http, $location, Data, $rootScope, $routeParams, toaster) {

        $scope.prompts = txtBrand;
        $scope.brand = {};

        $scope.brand.localDealsFolder = txtBrand.placeholderLocalDealsFolder;

        $scope.brandForms = function() {

            Data.brandForms($scope.brand).then(function successCallback(response){
                toaster.pop('info', "", txtBrand.updateSuccessful, 3000, 'trustedHtml');
                console.log("Success" + response);
            }, function errorCallback(response){
                toaster.pop('warning', "", txtBrand.updateFailed, 3000, 'trustedHtml');
                console.log("Error"); 
            });

        };

    }
]);