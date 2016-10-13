angular.module('app').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/components/company_detail/company_detail.html',
    "<div> <h2><small>Company name: </small> {{company.cName}}</h2> <h2><small>Price: </small> {{company.price}}</h2> <h2><small>Change, $: </small> {{company.changeValue}}</h2> <h2><small>Chnge, %: </small> {{company.changePercent}}</h2> <h2><small>Market capitalization: </small> {{company.marketCap}}</h2> </div>"
  );


  $templateCache.put('app/components/company_list/company_list.html',
    "<button class=\"btn btn-md menu-btn\" ng-click=\"listSm = !listSm\"> <i class=\"fa fa-bars\" aria-hidden=\"true\"></i> </button> <ul class=\"list-group list-large\"> <li class=\"list-group-item\" ui-sref-active=\"active-link\" ng-repeat=\"item in data | orderBy:'name'\"> <a ui-sref=\"main.company({name:item.name})\"> <i class=\"fa {{item.icon}}\" aria-hidden=\"true\"></i> {{item.cName}} <i class=\"fa fa-chevron-right\" aria-hidden=\"true\"></i> </a> </li> </ul> <ul class=\"list-group list-small\" uib-collapse=\"listSm\"> <li class=\"list-group-item\" ui-sref-active=\"active-link\" ng-repeat=\"item in data | orderBy:'name'\"> <a ui-sref=\"main.company({name:item.name})\"> <i class=\"fa {{item.icon}}\" aria-hidden=\"true\"></i> {{item.cName}} <i class=\"fa fa-chevron-right\" aria-hidden=\"true\"></i> </a> </li> </ul>"
  );


  $templateCache.put('app/components/company_update/company_update.html',
    "<label for=\"upload-delta\" tooltip-placement=\"left\" uib-tooltip=\"Upload deltas.csv file\"> <span> <i class=\"fa fa-file-text\" aria-hidden=\"true\"></i> </span> <input type=\"file\" id=\"upload-delta\" style=\"display:none\" upload-changes> </label> <div></div> <div class=\"results\"> <span ng-class=\"{blink: selectedFile}\" ng-show=\"selectedFile\"> Data is being updated using <b>{{selectedFile}}</b>... please wait. </span> <span ng-show=\"done\"> Data was successfully updated! </span> </div>"
  );


  $templateCache.put('app/components/main/main_view.html',
    "<div class=\"main-component\"> <div class=\"container-fluid\"> <div class=\"row\"> <div class=\"container\"> <div class=\"row\"> <div class=\"content-wrapper\"> <div class=\"row\"> <div class=\"col-xs-12 app-title\"> <h2>Company Data List</h2> </div> </div> <div class=\"row\"> <div class=\"col-sm-4 company-list\"> <ng-include src=\"'app/components/company_list/company_list.html'\"></ng-include> </div> <div class=\"col-sm-8 company-details\"> <div ng-hide=\"checkRoute('main.company')\"> <h2> Select a company to view the details... </h2> </div> <ui-view></ui-view> </div> </div> <div class=\"row\"> <div class=\"col-xs-12 company-update\"> <ng-include src=\"'app/components/company_update/company_update.html'\"></ng-include> </div> </div> </div> </div> </div> </div> </div> </div>"
  );

}]);
