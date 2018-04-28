draanks.controller('CategoryController', ['$scope', '$http', '$location', 'Data', '$rootScope', '$routeParams', 'toaster',
    function($scope, $http, $location, Data, $rootScope, $routeParams, toaster) {

		$scope.prompts = txtCategoryFormsOrder;

		var category = getParameterByName('category');
    $scope.formNumbers = Data.getFormsOrders(category);
		$scope.prompts.pageTitle = category + txtCategoryFormsOrder.formsOrder;
		$scope.prompts.placeHolderFormList = txtCategoryFormsOrder.placeHolderFormsList.replace("%1",category);

    $scope.clearTextArea = function(){
      document.getElementById("formPaths").value = "";
    }

  $scope.today = function() {
    $scope.dueDate = new Date();
  };
  $scope.today();

  $scope.clear = function () {
    $scope.dueDate = null;
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

			var clipboardText = "\r\n";

			line = "[Forms Order]" + "\r\n";
			clipboardText += line;

      if (profile.formOrderID == null){
        clipboardText += "\r\n";
      } else {
        clipboardText += profile.formOrderID + "\r\n\r\n";
      }

			line = "[Contract Line]" + "\r\n";
			clipboardText += line;

      if (profile.contractLine == null){
        clipboardText += "\r\n";
      } else {
        clipboardText += profile.formOrderID + "\r\n\r\n";
      }

			line = "[Due Date]" + "\r\n";
			clipboardText += line;

			line = moment($scope.dueDate).format('MM/DD/YYYY') + "\r\n\r\n";
			clipboardText += line;

			line = "[Test Deals]" + "\r\n";
			clipboardText += line;

      if (profile.dealRetail == null){
        clipboardText += "Retail Deal: " + "\r\n";
      } else {
        clipboardText += "Retail Deal: " + profile.dealRetail + "\r\n";
      }

      if (profile.dealLease == null){
        clipboardText += "Lease Deal: " + "\r\n\r\n";
      } else {
        clipboardText += "Lease Deal: " + profile.dealLease + "\r\n\r\n";
      }

			line = "[" + category + " Forms]"+ "\r\n";
			clipboardText += line;

      if (typeof($scope.formNumbers) == "undefined"){
        clipboardText += "\r\n";
      } else {
        var temp = $scope.formNumbers;
        line = temp.replace(/\r?\n/g, "\r\n");
        clipboardText += line;
        clipboardText += "\r\n\r\n";
      }

      if (typeof($scope.comments) == "undefined"){
        clipboardText += "\r\n";
      } else {
        clipboardText += "[Comments]"+ "\r\n";
        clipboardText += $scope.comments + "\r\n\r\n";
      }

      Data.setFormsOrders(category,$scope.formNumbers);


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
    window.history.go(-1);


		};

    $scope.goBack = function(){
      Data.setFormsOrders(category,$scope.formNumbers);
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