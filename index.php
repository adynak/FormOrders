<!doctype html>
<html lang="en" ng-app="formOrders" ng-cloak>
  <head>
    <meta charset="UTF-8">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <META HTTP-EQUIV="CACHE-CONTROL" CONTENT="NO-CACHE">


    <title></title>
    <meta name="viewport" content="width=device-width, user-scalable=no">

    <!-- <link rel="shortcut icon" href="resources/images/recipe.ico" mime="image/x-icon"> -->

    <link rel="icon" href="resources/images/recipe.ico" type="image/x-icon">
    <link rel="apple-touch-icon" sizes="114x114" href="resources/images/apple-icon-114x114.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="resources/images/apple-icon-144x144.png" />

    <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="css/style.css"/>
    <link rel="stylesheet" href="node_modules/angularjs-toaster/toaster.css">

    <link rel="shortcut icon" href="#" mime="image/x-icon">


    <script src="node_modules/angular/angular.min.js"></script>
    <script src="node_modules/angular-route/angular-route.min.js"></script>
    <script src="node_modules/angular-animate/angular-animate.min.js"></script>
    <script src="node_modules/angularjs-toaster/toaster.js"></script>
    <script src="node_modules/angular-ui/angular-ui.min.js"></script>
    <script src="node_modules/angular-ui-bootstrap/ui-bootstrap-tpls-0.13.0.min.js"></script>
    <script src="node_modules/moment/moment.js"></script>

    <script src="js/app.js"></script>

    <script src="js/controllers/nav.js"></script>
    <script src="js/controllers/success.js"></script>
    <script src="js/controllers/category.js"></script>
    <script src="js/controllers/buildLocalLibrary.js"></script>
    <script src="js/controllers/maintain/profile.js"></script>
    <script src="js/controllers/maintain/brand.js"></script>

    <script src="js/factory/dataService.js"></script>
    <script src="js/factory/listService.js"></script>

  </head>
  <body>

        <toaster-container 
            toaster-options="
                {
                    'type': 'success',
                    'time-out': 3000, 
                    'position-class': 'toast-bottom-right',
                    'close-button':true
                }
            ">
        </toaster-container>

    <div ng-controller="NavigationController">
        <nav class="cf" ng-include="'views/nav.html'"></nav>
        <div style="padding:0 0 0 30px;">
            <div class="row" ng-view>
            </div>
        </div>
    </div>

    <script src="node_modules/jquery/dist/jquery.min.js"></script>
    <script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="node_modules/angular-touch/angular-touch.js"></script> 
    <script src="node_modules/angular-messages/angular-messages.min.js"></script>
    <script src="node_modules/lodash/lodash.min.js"></script>

    <script src="i18n/en_US.js"></script>

  </body>
</html>
