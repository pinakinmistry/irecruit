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
		  	$state.go('showTest', { testId: $scope.tests.length - 1 });
		  }

		})
		.controller('ViewEditTestCtrl', function ($scope, $state, $stateParams, Test, QUESTION_TYPES) {
		  $scope.test = Test.all[$stateParams.testId];
		  $scope.questionTypes = QUESTION_TYPES;
		  $scope.test.questions = $scope.test.questions || [];
		  $scope.question = { options: [] };
		  $scope.option = { text: ''};
		  $scope.addOption = addOption;
		  $scope.deleteOption = deleteOption;
		  $scope.addQuestion = addQuestion;

		  function addOption() {
		  	$scope.question.options.push({text: $scope.option.text});
		  	$scope.option.text = '';
		  	$scope.$broadcast('newOptionAdded');
		  }

		  function deleteOption(index) {
		  	$scope.question.options.splice(index, 1);
		  }

		  function addQuestion() {
		  	$scope.test.questions.push($scope.question);
		  	$scope.question = { options: [] };
		  	Test.all[$stateParams.testId] = $scope.test;
		  }

		})
		.controller('EnterTestCtrl', function ($scope, Candidate, $state, $stateParams, $rootScope) {
			$scope.enterTest = enterTest;
			$scope.beginTest = beginTest;
			$rootScope.testEntered = true;
			$scope.submitAnswers = submitAnswers;

			function enterTest() {
				$scope.appearingCandidate = _.find(Candidate.all, function(candidate) {
					return _.contains(candidate.testskeys, $scope.testkey);
				});
				$state.go('enterTest.confirmCandidate');
			}

			function beginTest() {
				$scope.testStarted = true;
				$scope.test = _.find($scope.appearingCandidate.testsAssigned, function(test){
					return test.testkey === $scope.testkey;
				});
				$state.go('enterTest.beginTest');
			}

			function submitAnswers() {
				$scope.test.status = 'Answers submitted';
				$state.go('candidate');
			}


		});

})();
	