formOrders.controller('NavigationController', ['$scope', '$http', '$location', 'Data', '$rootScope', '$routeParams', 'toaster',
    function($scope, $http, $location, Data, $rootScope, $routeParams, toaster) {

		$scope.prompts = txtNavigation;

		$scope.startOver = function(){
            profile = {
                formOrder:   null,
                conractLine: null,
                dealRetail:  null,
                dealLease:   null
            };
            
        }

    }
]);