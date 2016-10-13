angular.module("app")
	.controller("CompanyDetailCtrl", [
		"$scope", 
		"$state",
		"$stateParams",
		function(
			$scope,
			$state,
			$stateParams
		){

		"use strict";

		$scope.company = $scope.getData("name", $stateParams.name, $scope.data);
		
	}]);