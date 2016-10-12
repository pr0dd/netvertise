angular.module('app').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/components/company_detail/company_detail.html',
    "<h1>Company detail</h1>"
  );


  $templateCache.put('app/components/company_list/company_list.html',
    "<ul> <li>One</li> <li>Two</li> <li>Three</li> <li>Four</li> </ul>"
  );


  $templateCache.put('app/components/company_update/company_update.html',
    "<button class=\"btn btn-lg btn-primary\" type=\"button\">UPDATE</button>"
  );


  $templateCache.put('app/components/main/main_view.html',
    "<div class=\"main-component\"> <div class=\"container-fluid\"> <div class=\"row\"> <div class=\"container\"> <div class=\"row\"> <div class=\"col-sm-4\"> <ng-include src=\"'app/components/company_list/company_list.html'\"></ng-include> </div> <div class=\"col-sm-8\"> <h2 ng-hide=\"checkRoute('main.company')\"> Select a company to view the details... </h2> <ui-view></ui-view> </div> <div class=\"col-xs-12\"> <ng-include src=\"'app/components/company_update/company_update.html'\"></ng-include> </div> </div> </div> </div> </div> </div>"
  );

}]);
