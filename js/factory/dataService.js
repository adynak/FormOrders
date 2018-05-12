formOrders.factory("Data", ['$http', '$q', '$rootScope', 'toaster',
    function($http, $q, $rootScope, toaster) {

        var factoryVariables = {
            activeMember : null,
            securityInfo : {
                schema: null,
                dbPass: null,
                pgPort: null,
                stop: true
            },
            profile: {
                formOrderID:  null,
                contractLine: null,
                dealRetail:   null,
                dealLease:    null
            },
            formsOrders: {
                catOne:   null,
                catTwo:   null,
                catThree: null,
            }
        };

        var setFormsOrders = function(category,forms){
            switch (category){
                case "CAT1":
                    factoryVariables.formsOrders.catOne = forms;
                break;

                case "CAT2":
                    factoryVariables.formsOrders.catTwo = forms;
                break;

                case "CAT3":
                    factoryVariables.formsOrders.catThree = forms;
                break;
            }
        }

        var getFormsOrders = function(category){
            switch (category){
                case "CAT1":
                    return factoryVariables.formsOrders.catOne;
                break;

                case "CAT2":
                    return factoryVariables.formsOrders.catTwo;
                break;

                case "CAT3":
                    return factoryVariables.formsOrders.catThree;
                break;
            }   
        }

        var setProfile = function(profile){
            factoryVariables.profile = profile;
        }

        var getProfile = function(){
            return factoryVariables.profile;
        }

        var brandForms = function(brand) {
            var qObject = $q.defer();
            var params = {
                brand: brand
            };
            $http({
                method: 'POST',
                url: 'resources/dataServices/brandForms.php',
                data: params,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then(function(success) {
                qObject.resolve(success.data);
            }, function(err) {
                console.log(err);
            });
            return qObject.promise;

        };

        var getLibraryForm = function(pathToForm,formID,localFolder) {
            var qObject = $q.defer();
            var params = {
                path: pathToForm,
                formID: formID,
                localFolder: localFolder
            };
            $http({
                method: 'POST',
                url: 'resources/dataServices/copyForms.php',
                data: params,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then(function(success) {
                qObject.resolve(success.data);
            }, function(err) {
                console.log(err);
            });
            return qObject.promise;

        };

        var updateFormInfo = function(brand){
            var qObject = $q.defer();
            var params = {
                brand: brand
            };
            $http({
                method: 'POST',
                url: 'resources/dataServices/brandForms.php',
                data: "params",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            }).then(function(success) {
                qObject.resolve(success.data);

            }, function(err) {
                console.log(err);
            });
            return qObject.promise;
        }

        var getFormPath = function(formID){
            var qObject = $q.defer();
            var params = {
                formID: formID
            };
            var url = 'https://portal.dealersuite.com/LenderForm/rest/eFormLibrary/getMappingFilePath';

            $http({
                method: 'GET',
                url: url,
                params: params,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic ' + btoa('eforms.order.details@dealersuite.com:EfProdyR3c')                    
                }
            }).then(function(success) {
                qObject.resolve(success.data);
            }, function(err) {
                // console.log(err);
                toaster.error(factoryMessages.getFormsFailedTitle,factoryMessages.getFormsFailed,5000);
            });
            return qObject.promise;            
        }

        return {
            updateFormInfo: updateFormInfo,
            brandForms: brandForms,
            getFormPath: getFormPath,
            setProfile: setProfile,
            getProfile: getProfile,
            setFormsOrders: setFormsOrders,
            getFormsOrders: getFormsOrders,
            getLibraryForm: getLibraryForm
        };
    }
]);