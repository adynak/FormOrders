formOrders.factory("ListServices", ['$http', '$q', '$rootScope', "Data",
    function($http, $q, $rootScope, Data) {

        var findIndexInData = function(data, property, value){
            var result = -1;
            var name = value.name
            data.some(function (item, i) {
                if (item[property] >= name) {
                    result = i;
                    return true;
                }
            });
            return result;
        }

        return {
        };
    }
]);