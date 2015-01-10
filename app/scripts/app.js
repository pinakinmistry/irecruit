'use strict';

/**
 * @ngdoc overview
 * @name irecruitApp
 * @description
 * # irecruitApp
 *
 * Main module of the application.
 */
angular
  .module('irecruitApp', [
    'ui.router',
    'irecruit.candidate.controllers',
    'irecruit.test.controllers',
    'irecruit.commons.directives'
  ])
  .config(function ($stateProvider) {
    $stateProvider
      .state('candidate', {
        url: '/candidate',
        templateUrl: 'scripts/candidate/candidate.html',
        controller: 'CandidateCtrl'
      })
      .state('showCandidate', {
        url: '/candidate/:candidateId',
        templateUrl: 'scripts/candidate/view-edit-candidate.html',
        controller: 'ViewEditCandidateCtrl'
      })
      .state('test', {
        url: '/test',
        templateUrl: 'scripts/test/test.html',
        controller: 'TestCtrl'
      })
      .state('showTest', {
        url: '/test/:testId',
        templateUrl: 'scripts/test/view-edit-test.html',
        controller: 'ViewEditTestCtrl'
      })
      .state('enterTest', {
        url: '/entertest',
        templateUrl: 'scripts/test/enter-test.html',
        controller: 'EnterTestCtrl'
      })
      .state('enterTest.confirmCandidate', {
        url: '/confirmCandidate',
        templateUrl: 'scripts/test/confirm-candidate.html'
      })
      .state('enterTest.beginTest', {
        url: '/beginTest',
        templateUrl: 'scripts/test/begin-test.html'
      });
      
  })
  .run(function ($state) {
    $state.go('candidate');
  })
  .constant('SKILLS', ['Front end', 'Java', 'Scala'])
  .constant('QUESTION_TYPES', ['Single Answer', 'Multiple Answer', 'Textual', 'Exercise']);