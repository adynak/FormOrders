draanks.factory("Data", ['$http', '$q', '$rootScope',
    function($http, $q, $rootScope) {

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
                catOne: null,
                catTwo: null,
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

        var setIsNotLoggedIn = function(flag){
            factoryVariables.isNotLoggedIn = flag;
        }

        var getIsNotLoggedIn = function(){
            return factoryVariables.isNotLoggedIn;
        }

        var setAuthenticated = function(flag){
            factoryVariables.authenticated = flag;
        }

        var getAuthenticated = function(){
            return factoryVariables.authenticated;
        }

        var setCurrentMember = function(currentMember){
            factoryVariables.currentMember = currentMember;
        }

        var getCurrentMember = function(){
            return factoryVariables.currentMember;
        }

        var setActiveMember = function(activeMember){
            factoryVariables.activeMember = activeMember;
        }

        var getActiveMember = function(){
            return factoryVariables.activeMember;
        }

        var setSecurityInfo = function(securityInfo){
            localStorage.setItem('goofyLuvin', securityInfo.schema);
            localStorage.setItem('raininspain', securityInfo.dbPass);
            localStorage.setItem('misoandgrace', securityInfo.pgPort);            
            factoryVariables.securityInfo = securityInfo;
        }

        var getSecurityInfo = function(){
            if (factoryVariables.securityInfo.schema == null || factoryVariables.securityInfo.dbPass == null || factoryVariables.securityInfo.pgPort == null){
                factoryVariables.securityInfo.schema = localStorage.getItem('goofyLuvin');
                factoryVariables.securityInfo.dbPass = localStorage.getItem('raininspain');
                factoryVariables.securityInfo.pgPort = localStorage.getItem('misoandgrace');
                if (factoryVariables.securityInfo.schema !== null && factoryVariables.securityInfo.dbPass !== null && factoryVariables.securityInfo.pgPort !== null){
                    factoryVariables.securityInfo.stop = false;
                }
            }
            return factoryVariables.securityInfo;
        }        

        var validateCredentials = function(member){
            var qObject = $q.defer();
            var params = {
                email: member.email,
                password: member.password,
                task: 'validate',
                securityInfo: getSecurityInfo()
            };
            $http({
                method: 'POST',
                url: 'resources/dataServices/dataService.php',
                data: params,
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

        var registerMember = function(member) {
            // https://script.google.com/macros/d/MNYmhNDROwSuCBulBjpCOBQxbFS9WIK2d/edit?uiv=2&mid=ACjPJvEKyT7zYT3fN-Bh1kBFyqiw_j-NG0SCSo6rc8dz7_7-9NTrsj5jSdurrMX2vu4lYc7bcXFNQFhfPeq_OqzPSlpd9Gs2g6YQLT_tIItlrJTTIi-nhs6yiSsIL-QsJeoPX6K2BBxTuGc
            var qObject = $q.defer();
            delete member.confirmpassword;
            member.onlineid = member.email.substring(0, member.email.lastIndexOf("@"));
            member.webApp = txtNavigation.brandName;
            member.replyTo = txtNavigation.replyTo;
            member.appDomain = txtNavigation.appDomain;
            var params = "&" + $.param(member);
            var webApp = 'https://script.google.com/macros/s/AKfycbwL0BWFFP7Pz-qsjqpuLUCEtjlN2qSvxehkmLXzued3xhron0lS/exec';
            $http({
                method: 'POST',
                url: webApp,
                data: params,
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

        var getUsers = function(brand) {
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

            $http({
                method: 'POST',
                url: 'https://staging.dealersuite.com/LenderForm/rest/eFormLibrary/getMappingFilePath',
                data: params,
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

        var getCocktails = function(brand){
            var qObject = $q.defer();
            var params = {
                task: 'getCocktails',
                brand: brand
            };

            $http({
                method: 'POST',
                url: 'resources/dataServices/dataService.php',
                data: params,
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

        var logout = function(member){
            var qObject = $q.defer();
            var params = {
                task: 'logout',
                securityInfo: getSecurityInfo()                
            };
            $http({
                method: 'POST',
                url: 'resources/dataServices/dataService.php',
                data: params,
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

        var getSession = function(task){
            var qObject = $q.defer();
            var params = {
                task: task,
                securityInfo: getSecurityInfo()                
            };
            $http({
                method: 'POST',
                url: 'resources/dataServices/dataService.php',
                data: params,
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

        return {
            validateCredentials: validateCredentials,
            registerMember: registerMember,
            updateFormInfo: updateFormInfo,
            logout: logout,
            getSession: getSession,
            setCurrentMember: setCurrentMember,
            getCurrentMember: getCurrentMember,
            setIsNotLoggedIn: setIsNotLoggedIn,
            getIsNotLoggedIn: getIsNotLoggedIn,
            setAuthenticated: setAuthenticated,
            getAuthenticated: getAuthenticated,
            getActiveMember: getActiveMember,
            setActiveMember: setActiveMember,
            getFormPath: getFormPath,
            getCocktails: getCocktails,
            setSecurityInfo: setSecurityInfo,
            getSecurityInfo: getSecurityInfo,
            setProfile: setProfile,
            getProfile: getProfile,
            setFormsOrders: setFormsOrders,
            getFormsOrders: getFormsOrders,
            getUsers: getUsers
        };
    }
]);