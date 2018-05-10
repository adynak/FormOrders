formOrders.controller('SuccessController', ['$scope', '$http', '$location', 'Data', '$rootScope', '$routeParams', 'toaster',
    function($scope, $http, $location, Data, $rootScope, $routeParams, toaster) {

        $scope.sideMenu = txtMenuSide;

        $scope.applyThisClass = function(memberProfile) {
            if (typeof(memberProfile) !== 'undefined'){
                if (memberProfile.member_type) {
                    return "";
                } else {
                    return "sr-only";
                }
            }
        };

        $scope.startOver = function(){
            profile = {
                formOrder:   null,
                conractLine: null,
                dealRetail:  null,
                dealLease:   null
            };

            Data.setProfile(profile);
            toasterText = txtToaster.startOver;
            toaster.pop('info', "", toasterText , 3000, 'trustedHtml');
        }

    }
]);