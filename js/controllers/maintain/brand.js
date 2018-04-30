draanks.controller('BrandController', ['$scope', '$http', '$location', 'Data', '$rootScope', '$routeParams', 'toaster',
    function($scope, $http, $location, Data, $rootScope, $routeParams, toaster) {

        $scope.prompts = txtBrand;
        $scope.brand = {};

        $scope.brand.localDealsFolder = txtBrand.placeholderLocalDealsFolder;

        // $scope.profile = Data.getProfile();

        $scope.brandForms = function() {
            // $location.path('/success');
            toaster.pop('info', "", txtProfile.updateSuccessful, 3000, 'trustedHtml');
debugger;
            Data.getFormPath(53452)
            .then(function successCallback(response){
                console.log('wtf');
                console.log(response);
                console.log("Success" + response);
            }, function errorCallback(response){
                console.log(response);
               console.log("Error"); 
            });


            // Data.getUsers($scope.brand)
            // .then(function successCallback(response){
            //     console.log("Success" + response);
            // }, function errorCallback(response){
            //    console.log("Error"); 
            // });

            // Data.updateFormInfo($scope.brand).then(function(status) {
            //     console.log(status);
            //     toaster.clear();
            //     // if (status == 'success') {
            //     //     $location.path('/success');
            //     //     toaster.pop('info', "", txtProfile.updateSuccessful, 3000, 'trustedHtml');
            //     // } else if (status == 'usernameexists') {
            //     //     $scope.invalidmessage = 'Member name already exists';
            //     //     toaster.pop('warning', "", 'username exists', 3000, 'trustedHtml');
            //     // } else {
            //     //     $scope.invalidmessage = 'Update failed';
            //     // }
            // }, function(err) {
            //     console.log('error');
            //     $scope.invalidmessage = err;
            // });
        };

    }
]);