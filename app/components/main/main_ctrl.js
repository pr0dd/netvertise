angular.module("app")
	.controller("MainCtrl", [
		"$scope", 
		"$state",
		"$localStorage",
		"CompanyData",
		"Utilities",
		function(
			$scope,
			$state,
			$localStorage,
			CompanyData,
			Utilities
		){

		"use strict";

		// Define utility functions:
		$scope.checkRoute = Utilities.checkRoute;
		$scope.getData = Utilities.getData;
		// Get data:
		$scope.data = CompanyData;
		
		// Notifications...
		$scope.selectedFile = false;
		$scope.done = false;
		// Control over list's state on small screens:
		$scope.listSm = true;

	}]);