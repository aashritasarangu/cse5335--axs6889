 var app = angular.module('myApp', ['ngAnimate']);
app.controller('appController', function($scope,$http){	
	var named = $scope.fname;
	$scope.fname = "a";
	$scope.quote = "b";
	$scope.user=[];
	$scope.fmsQuotes = "";
	var log = [];
	var i = 0;
	var tempArr = [];
	var res = ""; 
	var n = 1;
	$scope.submit = function(){
		
			var i = 1;
			
			var interval = setInterval(function()
			{			
 			
				var myData={'id': JSON.stringify(i)};
				$http({
				method:"POST",
				url: "/quotes",
				data: myData
				
				}).then(function mySuccess(response) {
				var jsonString = response.data;
				$scope.tblShow = true;
				$scope.fromJsoned=angular.fromJson(jsonString);
				$scope.randomName = $scope.fromJsoned.name;
				angular.forEach($scope.fromJsoned, function(value, key) {
					log.unshift(value);
				})
				$scope.fmsQuotes =  log;
				
				});
				
				i++;
				if(i>100)
				{
					clearInterval(interval);
				}
		},500)
		
	}
})
