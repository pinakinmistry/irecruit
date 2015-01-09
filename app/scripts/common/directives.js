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
		});

})();
