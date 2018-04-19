draanks.controller('ProfileController', ['$scope', '$http', '$location', 'Data', '$rootScope', '$routeParams', 'toaster',
    function($scope, $http, $location, Data, $rootScope, $routeParams, toaster) {

        $scope.prompts = txtProfile;

        $scope.profile = Data.getProfile();

        $scope.updateMember = function() {
            Data.setProfile($scope.profile);
            $location.path('/success');
            toaster.pop('info', "", txtProfile.updateSuccessful, 3000, 'trustedHtml');

        //     Data.updateMemberInfo(member).then(function(status) {
        //         toaster.clear();
        //         if (status == 'success') {
        //             $location.path('/success');
        //             toaster.pop('info', "", txtProfile.updateSuccessful, 3000, 'trustedHtml');
        //         } else if (status == 'usernameexists') {
        //             $scope.invalidmessage = 'Member name already exists';
        //             toaster.pop('warning', "", 'username exists', 3000, 'trustedHtml');
        //         } else {
        //             $scope.invalidmessage = 'Update failed';
        //         }
        //     }, function(err) {
        //         $scope.invalidmessage = err;
        //     });
        };

    }
]);