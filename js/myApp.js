var app = angular.module('myApp', []);

app.controller('MyCtrl', function($scope) {

	$scope.gender = '';

	$scope.male = function() {
		$scope.heShe = 'he';
		$scope.hisHer = 'his';
		$scope.himHer = 'him';
	};
	$scope.female = function() {
		$scope.heShe = 'she';
		$scope.hisHer = 'her';
		$scope.himHer = 'her';
	};

});
	