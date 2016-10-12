angular.module("app")
	.directive("uploadChanges", function(){
		"use strict";

		return function($scope, $element, $attrs){

            function renderImage(file){
                var reader = new FileReader();
                reader.onload = function(event){
                    var result = event.target.result;
                }
            
                // Read file and trigger load event:
                reader.readAsText(file);
            }

            $element.on("change", function(){
                $scope.selectedFile = this.files[0].name;
                $scope.$apply();
                renderImage(this.files[0]);
            });
		};
	});