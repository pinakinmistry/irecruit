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
      .state('test', {
        url: '/test',
        templateUrl: 'scripts/test/test.html',
        controller: 'TestCtrl'
      })
      .state('newTest', {
        url: '/test/:testId',
        templateUrl: 'scripts/test/newtest.html',
        controller: 'NewTestCtrl'
      });
      
  })
  .run(function ($state) {
    $state.go('candidate');
  })
  .constant('SKILLS', ['Front end', 'Java', 'Scala'])
  .constant('QUESTION_TYPES', ['Single Answer', 'Multiple Answer', 'Textual', 'Exercise']);