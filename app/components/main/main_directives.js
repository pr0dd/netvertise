angular.module("app")
	.directive("uploadChanges", ["$timeout", function($timeout){
		"use strict";

		return function($scope, $element, $attrs){

            // Divide an array into smaller arrays of given length:
            var divide = function(array, separator){
              var len = Math.floor(array.length/separator);
              var result = [];
              for(var i = 0; i < len; i++){
                result.push( array.splice(0, separator) );
              }
              return result;
            };
            // The actual updater:
            var updateRecords = function(chunk, data, count, limit){
                chunk = chunk.map(function(item){
                    return item.split(/\s*,\s*/);
                });
                angular.forEach(data, function(item,i){
                    var row = chunk[i];
                    if(angular.isArray(row) && row.length === 6) {
                        // Make an $http POST call to write changes to actual DB:
                        // ...
                        // Sync local data on response:
                        item.name           = row[0] ? row[0] : item.name;
                        item.cName          = row[1] ? row[1] : item.cName;
                        item.price          = row[2] ? row[2] : item.price;
                        item.changeValue    = row[3] ? row[3] : item.changeValue;
                        item.changePercent  = row[4] ? row[4] : item.changePercent;
                        item.marketCap      = row[5] ? row[5] : item.marketCap;
                    }
                });

                if(count === limit) {
                    $scope.selectedFile = false;
                    $scope.done = true;
                }
            };
            // Update initializer:
            var renderImage = function(file){
                var reader = new FileReader();
                reader.onload = function(event){
                    // Get text data from file:
                    var text = event.target.result;
                    // Match each line in the text:
                    var arrayFromText = text.match(/^.*(?:\s)$/gm);
                    // Assume that structure of delta.csv shall remain the 
                    // same for any futher updates. This means that it should 
                    // have information for updating all existing company records.
                    // Thus, set length of chunks equal to $scope.data.length plus 
                    // one (for timer) and divide arrayFromText:
                    var dividedArray = divide(arrayFromText, $scope.data.length+1);
                    var timer = 0;
                    var counter = 0;
                    angular.forEach(dividedArray, function(item,i,a){
                        timer += +item.pop();
                        counter++;
                        $timeout(updateRecords, timer, true, item, $scope.data, counter, a.length);
                    });
                };
            
                // Read file and trigger FileReader's 'load' event:
                reader.readAsText(file);
            }

            $element.on("change", function(){
                $scope.selectedFile = this.files[0].name;
                $scope.$apply();
                renderImage(this.files[0]);
            });
		};
	}]);