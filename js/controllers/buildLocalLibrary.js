formOrders.controller('BuildLocalLibraryController', ['$scope', '$http', '$location', 'Data', '$rootScope', '$routeParams', 'toaster',
    function($scope, $http, $location, Data, $rootScope, $routeParams, toaster) {

		$scope.prompts = txtBuildLocalLibrary;
		// \\139.126.12.159\ELF\DMV\State_specific\TEXAS\31478
		// \\139.126.12.159\ELF\DMV\State_specific\TEXAS\49145		
		// C:\LaserInstalls\Clayco~1

		// $scope.localFolder = 'C:\\LaserInstalls\\test\\CAT2';
		// $scope.formsList = 63459 + "\n" + 66976;

		$scope.copyLibraryPathToClipboard = function(){

			var xcopyCommand, pathToForm, pasteText="";
			var xcopyPrefix = "xcopy ";
			var starDotStar = "\\*.* ";
			var xcopySuffix = " /S /I";
			var textArea = document.getElementById("formsList");

			var arrayOfPaths = textArea.value.split("\n");
			var numberOfForms = arrayOfPaths.length;

			var formsString = arrayOfPaths.join();
			formsString = formsString.replace(/\s/g,'');

			Data.getFormPath(formsString) 
				.then(function successCallback(response){
					numberOfForms = response.length;
					for (var i = 0; i < numberOfForms; i++) {
						formID = response[i].formId;
						pathToForm = response[i].path;
						xcopyCommand = xcopyPrefix + pathToForm + starDotStar;
						xcopyCommand += " " + $scope.localFolder + "\\" + formID + xcopySuffix;
						xcopyCommand = pathToForm;
						if (i==numberOfForms-1){
							pasteText += xcopyCommand;
						} else {
							pasteText += xcopyCommand + "\r\n";
						}
					}

					var textArea = document.getElementById("pasteText");
					textArea.value = pasteText;
					toaster.pop('info', "", txtBuildLocalLibrary.updateSuccessful, 3000, 'trustedHtml');

				}, function errorCallback(response){
					toaster.pop('warning', "", txtBuildLocalLibrary.updateFailed, 3000, 'trustedHtml');
					console.log("Error"); 
			});

		}

		$scope.clearTextArea = function(){
			document.getElementById("formsList").value = "";
			document.getElementById("pasteText").value = "";
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

			var xcopyCommand, pathToForm, pasteText="";
			var xcopyPrefix = "xcopy ";
			var starDotStar = "\\*.* ";
			var xcopySuffix = " /S /I";
			var textArea = document.getElementById("formsList");
			var message;

			var arrayOfPaths = textArea.value.split("\n");
			var numberOfForms = arrayOfPaths.length;

			var formsString = arrayOfPaths.join();
			formsString = formsString.replace(/\s/g,'');

			Data.getFormPath(formsString) 
				.then(function successCallback(response){

					$scope.hideDownloading = false;

					toaster.wait(txtBuildLocalLibrary.waitTitle,txtBuildLocalLibrary.waitWait,300000);

					numberOfForms = response.length;
					for (var i = 0; i < numberOfForms; i++) {
						formID = response[i].formId;
						pathToForm = response[i].path;

						Data.getLibraryForm(pathToForm, formID, localFolder)
							.then(function successCB(response){

								var index = arrayOfPaths.indexOf(response);
								if (index > -1) {
								  arrayOfPaths.splice(index, 1);
								}

								if(arrayOfPaths.length==0){
									toaster.clear();
									toaster.pop(
										{
											type: 'success',
											title:  txtBuildLocalLibrary.downloadComplete,
											body: formsString,
											showCloseButton: true,
											timeout: 5000,
											tapToDismiss: false
										}
									);
								}

							}, function errorCB(response){
								console.log('whoops');
						});

						pasteText += pathToForm + "\n";
					}

					var textArea = document.getElementById("pasteText");
					textArea.value = pasteText;
					toaster.pop('info', "", txtBuildLocalLibrary.updateSuccessful, 3000, 'trustedHtml');

				}, function errorCallback(response){
					toaster.pop('warning', "", txtBuildLocalLibrary.updateFailed, 3000, 'trustedHtml');
					console.log("Error"); 
			});

		}

    }
]);