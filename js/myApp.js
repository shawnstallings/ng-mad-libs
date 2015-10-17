var app = angular.module('myApp', ['ngMessages', 'ngAnimate']);

app.controller('MyCtrl', function($scope) {
	$scope.change = false;
	$scope.gender = '';
	$scope.enterFade = 'fade';
	$scope.textFade = '';

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

	$scope.submit = function() {
		if( $scope.myForm.$valid ) {
			console.log("form is valid");
			$scope.enterFade = 'blackOut';
			$scope.textFade = 'fade';
			return true;
		}
		else {
			console.log("form is not valid");
			return false;
		}
	};

	$scope.reset = function() {
		$scope.enterFade = 'fade';
		$scope.textFade = '';
		$scope.gender = '';
		$scope.data.name = '';
		$scope.data.jobTitle = '';
		$scope.data.tediousTask = '';
		$scope.data.dirtyTask = '';
		$scope.data.celebrity = '';
		$scope.data.uselessSkill = '';
		$scope.data.adjective = '';
		$scope.data.obnoxiousCelebrity = '';
		$scope.data.hugeNumber = '';
		$scope.myForm.$submitted = null;
	};
});