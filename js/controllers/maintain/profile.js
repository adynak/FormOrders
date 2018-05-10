formOrders.controller('ProfileController', ['$scope', '$http', '$location', 'Data', '$rootScope', '$routeParams', 'toaster',
    function($scope, $http, $location, Data, $rootScope, $routeParams, toaster) {

        $scope.prompts = txtProfile;

        $scope.profile = Data.getProfile();

        $scope.updateProfile = function() {
            Data.setProfile($scope.profile);
            $location.path('/success');
            toaster.pop('info', "", txtProfile.updateSuccessful, 3000, 'trustedHtml');
        };

    }
]);