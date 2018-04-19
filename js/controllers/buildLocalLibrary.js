draanks.controller('BuildLocalLibraryController', ['$scope', '$http', '$location', 'Data', '$rootScope', '$routeParams', 'toaster',
    function($scope, $http, $location, Data, $rootScope, $routeParams, toaster) {

		$scope.prompts = txtBuildLocalLibrary;
		// \\139.126.12.159\ELF\DMV\State_specific\TEXAS\31478
		// \\139.126.12.159\ELF\DMV\State_specific\TEXAS\49145		
		// C:\LaserInstalls\Clayco~1

		$scope.copyLibraryPathToClipboard = function(){

			var xcopyCommand, pathToForm, pasteText="";
			var xcopyPrefix = "xcopy ";
			var starDotStar = "\\*.* ";
			var xcopySuffix = " /S /I";
			var textArea = document.getElementById("formPaths");

			var arrayOfPaths = textArea.value.split("\n");
			var numberOfForms = arrayOfPaths.length;
			for (var i = 0; i < numberOfForms; i++) {
				pathToForm = arrayOfPaths[i];
				console.log(pathToForm);
				pathToForm = pathToForm.trim();
				var filename = pathToForm.replace(/^.*[\\\/]/, '');

				xcopyCommand = xcopyPrefix + pathToForm + starDotStar;
				xcopyCommand += " " + $scope.localFolder + "\\" + filename + xcopySuffix;
    			pasteText += xcopyCommand + "\r\n"
			}
			var textArea = document.getElementById("pasteText");
			textArea.value = pasteText;

		}

		$scope.clearTextArea = function(){
			document.getElementById("formPaths").value = "";
			document.getElementById("pasteText").value = "";
		}

    }
]);