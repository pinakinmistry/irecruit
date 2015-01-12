(function () {
  'use strict';
  // this function is strict...

	angular.module('irecruit.commons.directives', [
		])
		.directive('focusOn', function() {
		   return function(scope, elem, attr) {
		      scope.$on(attr.focusOn, function(e) {
		          elem[0].focus();
		      });
		   };
		})
		.directive('testRunner', function ($sce) {
    return {
      templateUrl: 'scripts/test/test-runner.html',
      restrict: 'E',
      scope: {
      	test: "="
      },
      link: function postLink(scope, element, attrs) {
      	scope.currentQuestion = 0;
      	scope.nextQuestion = nextQuestion;
      	scope.prevQuestion = prevQuestion;
        scope.runCode = runCode;

      	function nextQuestion() {
      		if(scope.currentQuestion < scope.test.questions.length - 1){
      			scope.currentQuestion = scope.currentQuestion + 1;	
      		}
      	}

      	function prevQuestion() {
      		if(scope.currentQuestion > 0){
      			scope.currentQuestion = scope.currentQuestion - 1;	
      		}
      	}

        function runCode() {
          var code = $sce.trustAsJs(scope.test.questions[scope.currentQuestion].content);
          scope.codeOutput = eval('(' + code + ')');
        }

      }
    };
  })
  .directive('contenteditable', function() {
  return {
    require: 'ngModel',
    link: function(scope, element, attrs, ctrl) {
      // view -> model
      element.bind('blur', function() {
        scope.$apply(function() {
          ctrl.$setViewValue(element.html());
        });
      });

      // model -> view
      ctrl.$render = function() {
        element.html(ctrl.$viewValue);
      };

      // load init value from DOM
      //ctrl.$setViewValue(element.html());
    }
  };
});

})();
