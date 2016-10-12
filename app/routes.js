angular.module("app")
	.config([
		"$stateProvider", 
		"$urlRouterProvider", 
		function($stateProvider, $urlRouterProvider){
		"use strict";
		
		$urlRouterProvider.otherwise("/");
		$stateProvider
		    .state('main', {
		      url: "/",
		      templateUrl: "app/components/main/main_view.html",
		      controller: "MainCtrl",
		      resolve: {
		      	CompanyData: ["CompData", function(CompData){
		      		return CompData;
		      	}],
		      }
		    })
		    .state('main.company', {
		      url: "company/{name}",
		      templateUrl: "app/components/company_detail/company_detail.html",	      
		      controller: "CompanyDetailCtrl"
		    })
	}]);