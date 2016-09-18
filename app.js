(function () {
	'use strict';

	angular.module('LunchCheck', [])
	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope', '$filter'];
	function LunchCheckController ($scope, $filter) {
		$scope.menu = "";
		$scope.menuCount = 0;
		$scope.message = "";
		$scope.colors = {};
		$scope.border = {};
		
		$scope.checkMenu = function(){
			$scope.menuCount = calcMenuQuantity($scope.menu);
			$scope.message = getMenuMessage($scope.menuCount);
			$scope.colors = colorMsg($scope.message);
			$scope.border = colorBorder($scope.message);

		};
	}

	function calcMenuQuantity(string) {
		var totalStrings = 0;

	    if (string.length >0){
	      //Removing spaces from a string
	      var re = /\s*,\s*/;
	      var arrayOfStrings = string.split(re);
	      for (var i=0;i<arrayOfStrings.length;i++){
	        var element = arrayOfStrings[i];
	        if (element.length>0)totalStrings+=1;
	      }
	    }
	    return totalStrings;
	}

	function getMenuMessage(int) {
		var message = "";
		
		if(int == 0){
			message = "Please enter data first";
		}
		else if (int > 0 && int <= 3){
			message = "Enjoy!";
		} 
		else message = "Too much!";

		return message;

	}

	function colorMsg(string) {
		var color = "";
		
		if (string == "Enjoy!") {
			color = "green";
		}
		else color = "red";

		return color;
	}

	function colorBorder(string) {
		var color = "";

		if (string == "Enjoy!"){
			color = "solid 1px green";
		}
		else color = "solid 1px red";

		return color;
	}

})();