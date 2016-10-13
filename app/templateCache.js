angular.module('app').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/components/company_detail/company_detail.html',
    "<h2><small>Company name: </small>{{company.cName}}</h2> <h2><small>Price: </small>{{company.price}}</h2> <h2><small>Change, $: </small>{{company.changeValue}}</h2> <h2><small>Chnge, %: </small>{{company.changePercent}}</h2> <h2 ng-show=\"company.marketCap !==''\"> <small>Market capitalization: </small>{{company.marketCap}} </h2>"
  );


  $templateCache.put('app/components/company_list/company_list.html',
    "<ul class=\"list-group\"> <li class=\"list-group-item\" ui-sref-active=\"active\" ng-repeat=\"item in data | orderBy:'name'\"> <a ui-sref=\"main.company({name:item.name})\"> {{item.cName}} </a> </li> </ul>"
  );


  $templateCache.put('app/components/company_update/company_update.html',
    "<label for=\"upload-delta\"> <span class=\"btn btn-lg btn-warning\">UPDATE</span> <input type=\"file\" id=\"upload-delta\" style=\"display:none\" upload-changes> </label> <span ng-class=\"{blink: selectedFile}\" ng-show=\"selectedFile\"> Data is being updated using <b>{{selectedFile}}</b>... please wait. </span> <span ng-show=\"done\" class=\"text-success\"> <b>Data was successfully updated!</b> </span>"
  );


  $templateCache.put('app/components/main/main_view.html',
    "<div class=\"main-component\"> <div class=\"container-fluid\"> <div class=\"row\"> <div class=\"container\"> <div class=\"row\"> <div class=\"col-sm-4 company-list\"> <ng-include src=\"'app/components/company_list/company_list.html'\"></ng-include> </div> <div class=\"col-sm-8 company-details\"> <h2 ng-hide=\"checkRoute('main.company')\"> Select a company to view the details... </h2> <ui-view></ui-view> </div> <div class=\"col-xs-12\"> <ng-include src=\"'app/components/company_update/company_update.html'\"></ng-include> </div> </div> </div> </div> </div> </div>"
  );

}]);
