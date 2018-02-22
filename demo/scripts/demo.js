'use strict';

angular.module('app')
	.controller('DemoCtrl', function ($scope, $rootScope, $timeout) {

		$scope.model = { abc : 123};

		// Move Function Section
		$scope.movePrev = function(){
			$.fn.fullpage.moveSlideLeft();
		};

		$scope.moveNext = function(){
			$.fn.fullpage.moveSlideRight();
		};

});
