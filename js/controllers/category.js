draanks.controller('CategoryController', ['$scope', '$http', '$location', 'Data', '$rootScope', '$routeParams', 'toaster',
    function($scope, $http, $location, Data, $rootScope, $routeParams, toaster) {

		$scope.prompts = txtCategoryFormsOrder;

		var category = getParameterByName('category');
		$scope.prompts.pageTitle = category + txtCategoryFormsOrder.formsOrder;
		$scope.prompts.placeHolderFormsList = txtCategoryFormsOrder.placeHolderFormsList.replace("%1",category);

    $scope.clearTextArea = function(){
      document.getElementById("formPaths").value = "";
    }

  $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.clear = function () {
    $scope.dt = null;
  };

  // Disable weekend selection
  $scope.disabled = function(date, mode) {
    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
  };

  $scope.toggleMin = function() {
    $scope.minDate = $scope.minDate ? null : new Date();
  };
  $scope.toggleMin();

  $scope.open = function($event) {
  	console.log($event);
    $event.preventDefault();
    $event.stopPropagation();

    $scope.opened = true;
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.formats = ['MM/dd/yyyy','dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];


		$scope.copyToClipboard = function(){
			var line = ''

			var profile = Data.getProfile();
			profile.formOrderID = '123';
			profile.contractLine = 'af';
			profile.dealRetail = 'qsdad';
			profile.dealLease = '142';

			var clipboardText = "\r\n";

			line = "[Forms Order]" + "\r\n";
			clipboardText += line;

			line = profile.formOrderID + "\r\n\r\n";
			clipboardText += line;

			line = "[Contract Line]" + "\r\n";
			clipboardText += line;

			line = profile.contractLine + "\r\n\r\n";
			clipboardText += line;

			line = "[Due Date]" + "\r\n";
			clipboardText += line;

			line = "" + "\r\n\r\n";
			clipboardText += line;

			line = "[Test Deals]" + "\r\n";
			clipboardText += line;

			line = "Retail Deal: " + profile.dealRetail + "\r\n";
			clipboardText += line;

			line = "Lease Deal: " + profile.dealLease + "\r\n\r\n";
			clipboardText += line;

			line = "[" + category + " Forms]"+ "\r\n";
			clipboardText += line;

			line = "" + "\r\n\r\n";
			clipboardText += line;

			line = "[Comments]"+ "\r\n";
			clipboardText += line;

			line = "" + "\r\n\r\n";
			clipboardText += line;



    // create temp element
    var copyElement = document.createElement("span");
    copyElement.appendChild(document.createTextNode(clipboardText));
    copyElement.id = 'tempCopyToClipboard';
    angular.element(document.body.append(copyElement));

    // select the text
    var range = document.createRange();
    range.selectNode(copyElement);
    window.getSelection().removeAllRanges();
    var xx = window.getSelection().addRange(range);

    // copy & cleanup
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    copyElement.remove();



		};

    $scope.goBack = function(){
      window.history.go(-1);
    }

		function getParameterByName(name, url) {
    		if (!url) url = window.location.href;
    			name = name.replace(/[\[\]]/g, "\\$&");
    		var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        		results = regex.exec(url);
    		if (!results) return null;
    		if (!results[2]) return '';
    		return decodeURIComponent(results[2].replace(/\+/g, " "));
		}

    }
]);