(function () {
  'use strict';
  // this function is strict...

	angular.module('irecruit.test.controllers', [
			'ui.router',
			'news.test.services'
		])
		.controller('TestCtrl', function ($scope, $state, Test, SKILLS) {
		  $scope.tests = Test.all;
		  $scope.test = {skills: '', name: '', creator: '', type: ''};

		  $scope.addTest = addTest;
		  $scope.skills = SKILLS;

		  function addTest() {
		  	Test.add($scope.test);
		  	$scope.test = {skills: '', name: '', creator: '', type: ''};
		  	$state.go('newTest', { testId: $scope.tests.length - 1 });
		  }

		})
		.controller('NewTestCtrl', function ($scope, $state, $stateParams, Test, SKILLS) {
		  $scope.test = Test.all[$stateParams.testId];

		});

})();
	