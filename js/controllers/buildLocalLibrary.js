formOrders.controller('BuildLocalLibraryController', ['$scope', '$http', '$location', 
													  'Data', '$rootScope', '$routeParams', 
													  'toaster',
    function($scope, $http, $location, Data, $rootScope, $routeParams, toaster) {

		$scope.prompts = txtBuildLocalLibrary;
		// \\139.126.12.159\ELF\DMV\State_specific\TEXAS\31478
		// \\139.126.12.159\ELF\DMV\State_specific\TEXAS\49145		
		// C:\LaserInstalls\Clayco~1

		$scope.localFolder = 'C:\\LaserInstalls\\test\\CAT2';
		$scope.formsList = 63459 + "\n" + 66976;

		$scope.formsAreMissing = false;
		var missingFormsString = "";

		$scope.copyLibraryPathToClipboard = function(){

			$scope.foundForms = "";

			var pathToForm, numberOfForms, missingForms, pasteText="";

			var arrayOfForms = $scope.formsList.split("\n").map(Number);
			var arrayOfFoundForms = [];
			var formsString = arrayOfForms.join();
			formsString = formsString.replace(/\s/g,'');

			Data.getFormPath(formsString) 
				.then(function successCallback(response){
					numberOfForms = response.length;
					for (var i = 0; i < numberOfForms; i++) {
						formID = response[i].formId;
						pathToForm = response[i].path;

						if (pathToForm != ""){
							arrayOfFoundForms.push(formID);
							if (i==numberOfForms-1){
								pasteText += pathToForm;
							} else {
								pasteText += pathToForm + "\r\n";
							}
						}
					}

					missingForms = _.difference(arrayOfForms, arrayOfFoundForms);

					if (!Array.isArray(missingForms) || missingForms.length) {
						$scope.formsAreMissing = true;
						$scope.missingForms = missingForms.join();
					}

					$scope.foundForms = pasteText;
					toaster.pop('info', "", txtBuildLocalLibrary.updateSuccessful, 3000, 'trustedHtml');

				}, function errorCallback(response){
					toaster.pop('warning', "", txtBuildLocalLibrary.updateFailed, 3000, 'trustedHtml');
					console.log("Error"); 
			});

		}

		$scope.clearTextArea = function(){
			$scope.formsAreMissing = false;
			$scope.missingFormsString = "";
			$scope.formsList = "";
			$scope.foundForms = "";
		}

		$scope.getLibraryForm = function(){

			var localFolder = $scope.localFolder;

			if (typeof(localFolder) == "undefined"){

				var errorToast = {
					type: 'error',
					title: txtBuildLocalLibrary.localFolder,
					timeout: 9000,
					body: txtBuildLocalLibrary.pathMissing,
					showCloseButton: true
				};

				toaster.pop(errorToast);
				return;
			}


			$scope.foundForms = "";

			var pathToForm, numberOfForms, missingForms, pasteText="";
			var formDef = {};

			var arrayOfForms = $scope.formsList.split("\n").map(Number);
			var arrayOfFoundForms = [];
			var formsString = arrayOfForms.join();
			formsString = formsString.replace(/\s/g,'');

			Data.getFormPath(formsString) 
				.then(function successCallback(response){
					numberOfForms = response.length;
					for (var i = 0; i < numberOfForms; i++) {
						formID = response[i].formId;
						pathToForm = response[i].path;

						if (pathToForm != ""){
							formDef.formID = formID;
							formDef.pathToForm = pathToForm;
							arrayOfFoundForms.push(formDef);
							if (i==numberOfForms-1){
								pasteText += pathToForm;
							} else {
								pasteText += pathToForm + "\r\n";
							}
						}
					}

					missingForms = _.difference(arrayOfForms, arrayOfFoundForms);

					if (!Array.isArray(missingForms) || missingForms.length) {
						$scope.formsAreMissing = true;
						$scope.missingForms = missingForms.join();
					}

					$scope.foundForms = pasteText;
					toaster.pop('info', "", txtBuildLocalLibrary.updateSuccessful, 3000, 'trustedHtml');
console.log(arrayOfFoundForms);
					numberOfForms = arrayOfFoundForms.length;
					for (var i = 0; i < numberOfForms; i++) {
						pathToForm = arrayOfFoundForms[i].pathToForm;
						formID     = arrayOfFoundForms[i].formID;
						console.log(pathToForm, formID);
					}

				}, function errorCallback(response){
					toaster.pop('warning', "", txtBuildLocalLibrary.updateFailed, 3000, 'trustedHtml');
					console.log("Error"); 
			});

		}


    }
]);