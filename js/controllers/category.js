formOrders.controller('CategoryController', ['$scope', '$http', '$location', 'Data', '$rootScope', '$routeParams', 'toaster',
  function($scope, $http, $location, Data, $rootScope, $routeParams, toaster) {

    $scope.prompts = txtCategoryFormsOrder;

    var category = getParameterByName('category');
    var user = getParameterByName('user');
    console.log(user);

    $scope.formNumbers = Data.getFormsOrders(category);
    $scope.prompts.pageTitle = category + txtCategoryFormsOrder.formsOrder;
    $scope.prompts.placeHolderFormList = txtCategoryFormsOrder.placeHolderFormsList.replace("%1",category);

    $scope.clearTextArea = function(){
      document.getElementById("formsList").value = "";
    };

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
      var line = '';

      var profile = Data.getProfile();

      var clipboardText = "";

      line = "[Forms Order]" + "<br>";
      clipboardText += line;

      if (profile.formOrderID == null){
        clipboardText += "<br>";
      } else {
        clipboardText += profile.formOrderID + "<br><br>";
      }

      line = "[Contract Line]" + "<br>";
      clipboardText += line;

      if (profile.contractLine == null){
        clipboardText += "<br>";
      } else {
        clipboardText += profile.contractLine + "<br><br>";
      }

      line = "[Due Date]" + "<br>";
      clipboardText += line;

      line = moment($scope.dueDate).format('MM/DD/YYYY') + "<br><br>";
      clipboardText += line;

      line = "[Test Deals]" + "<br>";
      clipboardText += line;

      if (profile.dealRetail == null){
        clipboardText += "Retail Deal: " + "<br><br>";
      } else {
        clipboardText += "Retail Deal: " + profile.dealRetail + "<br>";
      }

      if (profile.dealLease == null){
        clipboardText += "Lease Deal: " + "<br><br>";
      } else {
        clipboardText += "Lease Deal: " + profile.dealLease + "<br><br>";
      }

      line = "[" + category + " Forms]"+ "<br>";
      clipboardText += line;

      console.log($scope.formNumbers);
      if (typeof($scope.formNumbers) == "undefined" || $scope.formNumbers == null){
        clipboardText += "<br>";
      } else {
        var temp = $scope.formNumbers;
        line = temp.replace(/\r?\n/g, "<br>");
        clipboardText += line;
        clipboardText += "<br><br>";
      }

      if (typeof($scope.comments) == "undefined"){
        clipboardText += "<br>";
      } else {
        clipboardText += "[Comments]"+ "<br>";
        clipboardText += $scope.comments + "<br><br>";
      }

      if (user !== null){
        clipboardText += "[CMF]"+ "<br>";
        clipboardText += $scope.comments + "<br><br>";

        clipboardText += "[CNumber]"+ "<br>";
        clipboardText += $scope.comments + "<br><br>";

        clipboardText += "[Case]"+ "<br>";
        clipboardText += $scope.comments + "<br><br>";

        clipboardText += "[DashFI]"+ "<br>";
        clipboardText += $scope.comments + "<br><br>";

        clipboardText += "[IPAddress]"+ "<br>";
        clipboardText += $scope.comments + "<br><br>";
      }

      Data.setFormsOrders(category,$scope.formNumbers);

        // create temp element
      var copyElement = document.createElement("span");
      copyElement.innerHTML = clipboardText;
      // copyElement.appendChild(document.createTextNode(clipboardText));
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
      var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
      var results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

  }
]);