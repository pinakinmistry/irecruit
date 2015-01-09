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
		  	Candidate.add($scope.candidate);
		  	$scope.candidate = {name: '', phone: '', email: '', skypeId: ''};
		  }

		})
		.controller('ViewEditCandidateCtrl', function ($scope, $state, $stateParams, Candidate, SKILLS, Test) {
		  $scope.candidate = Candidate.all[$stateParams.candidateId];
		  $scope.tests = Test.all;

		});

})();
	