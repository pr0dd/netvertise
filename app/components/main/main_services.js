angular.module("app")
	.factory("CompData", [
		"$http",
		"$q", 
		"$localStorage", 
		function(
			$http, 
			$q, 
			$localStorage
		){
		"use strict";

		// In a real-life app use $http.get() to bring real data from a database

		var companyData = [
			{
				test: "asdf"
			}
		];

		// Imitate $http call with a promise:
		// Use $localStorage to save data..
		var deferred = $q.defer();
		
		if($localStorage.ntvs === undefined || $localStorage.ntvs === null) {
			// Set default $LS value:
    		$localStorage.ntvs = companyData;
    		deferred.resolve($localStorage.ntvs);
    		return deferred.promise;
    	} else {
    		deferred.resolve($localStorage.ntvs);
    		return deferred.promise;
    	}

	}])
	.factory("Utilities", [
		"$http",
		"$state",
		function(
			$http,
			$state
		){
		"use strict";

		var _checkRoute = function(r){
			if(!angular.isString(r)) {
				console.error("Utilities service -> 'checkRoute' function: argument must be a string");
			}

			if($state.current.name === r){
				return true;
			} else {
				return false;
			}
		};

		var _getData = function(id,a){
			if(!angular.isString(id) || !angular.isArray(a)) {
				console.error("Utilities service -> 'getData' function: got invalid arguments");
			}
			
			var data;
			
			for(var i = 0, l = a.length; i<l; i++){
				if(a[i].id === id){
					data = a[i];
					break;
				}
			}

			return data;
		};

		var _goTo = function(partial, params){
			$state.go(partial,params);
		};

		return {
			checkRoute: _checkRoute,
			getData: _getData,
			goTo: _goTo
		};
	}]);
	