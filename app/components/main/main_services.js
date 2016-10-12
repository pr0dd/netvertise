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
				id: 1,
				name: "GOOG",
				cName: "Google Inc",
				price: 658.89,
				changeValue: "-2.01",
				changePercent: "-0.30%",
				marketCap: "460.74B" 
			},
			{
				id: 2,
				name: "BIDU",
				cName: "Baidu Inc (ADR)",
				price: 160.19,
				changeValue: "-2.70",
				changePercent: "-1.66%",
				marketCap: "56.49B" 
			},
			{
				id: 3,
				name: "YNDX",
				cName: "Yandex NV",
				price: 11.80,
				changeValue: "-0.11",
				changePercent: "-0.92%",
				marketCap: "3.75B" 
			},
			{
				id: 4,
				name: "BCOR",
				cName: "Blucora Inc",
				price: 13.43,
				changeValue: "-0.12",
				changePercent: "-0.89%",
				marketCap: "557.51B" 
			},
			{
				id: 5,
				name: "YHOO",
				cName: "Yahoo! Inc",
				price: 34.79,
				changeValue: "-0.40",
				changePercent: "-1.14%",
				marketCap: "32.76B" 
			},
			{
				id: 6,
				name: "MSFT",
				cName: "Microsoft Corp",
				price: 46.17,
				changeValue: "-0.44",
				changePercent: "-0.93%",
				marketCap: "369.67B" 
			},
			{
				id: 7,
				name: "IACI",
				cName: "IAC/InterActiveCorp",
				price: 73.17,
				changeValue: "-0.44",
				changePercent: "-0.60%",
				marketCap: "6.09B" 
			},
			{
				id: 8,
				name: "FB",
				cName: "Facebook Inc",
				price: 94.20,
				changeValue: "-1.11",
				changePercent: "-1.16%",
				marketCap: "264.27B" 
			},
			{
				id: 9,
				name: "AAPL",
				cName: "Apple Inc.",
				price: 113.76,
				changeValue: "-1.25",
				changePercent: "-1.09%",
				marketCap: "649.88B" 
			},
			{
				id: 10,
				name: "TWTR",
				cName: "Twitter Inc",
				price: 27.19,
				changeValue: "-0.42",
				changePercent: "-1.52%",
				marketCap: "18.35B" 
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

		var _getData = function(prop, param, arr){
			if( !angular.isString(prop) || 
				!angular.isString(param) || 
				!angular.isArray(arr) ){
				console.error("Utilities service -> 'getData' function: got invalid arguments");
			}
			
			var data;
			
			for(var i = 0, l = arr.length; i<l; i++){
				if(arr[i][prop] === param){
					data = arr[i];
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
	