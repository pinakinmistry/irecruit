(function () {
  'use strict';
  // this function is strict...

	angular.module('irecruit.candidate.controllers', [
			'ui.router',
			'news.candidate.services',
			'news.test.services'
		])
		.controller('CandidateCtrl', function ($scope, $state, Candidate, SKILLS) {
			$scope.candidates = Candidate.all;
		  $scope.candidate = {name: '', phone: '', email: '', skypeId: ''};

		  $scope.addCandidate = addCandidate;
		  $scope.skills = SKILLS;

		  function addCandidate() {
		  	$scope.candidate.status = 'Just added';
		  	Candidate.add($scope.candidate);
		  	$scope.candidate = {name: '', phone: '', email: '', skypeId: ''};
		  }
		})
		.controller('ViewEditCandidateCtrl', function ($scope, $state, $stateParams, Candidate, SKILLS, Test) {
		  $scope.candidate = Candidate.all[$stateParams.candidateId];
		  $scope.tests = Test.all;
		  $scope.testAssigned = {};
		  $scope.assignTest = assignTest;
		  $scope.evaluateTest = evaluateTest;

		  function assignTest() {
		  	$scope.candidate.testsAssigned.push($scope.testAssigned);
		  	$scope.candidate.testskeys.push($scope.testAssigned.testkey);
		  	var numberOfTests = $scope.candidate.testsAssigned.length;
		  	$scope.candidate.status = numberOfTests + ' test' + (numberOfTests > 1 ? 's' : '') + ' assigned';
		  	$scope.testAssigned = {};
		  	//$state.go('candidate');
		  }

		  function evaluateTest(testIndex) {
		  	$state.go('evaluateTest', { candidateId: $scope.candidate.name, testId: testIndex});
		  }

		});

})();
	