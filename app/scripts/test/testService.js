'use strict';

angular.module('news.test.services', [
	])
	.factory('Test', function () {
	  
	  var tests = [
	  	{ skills: 'Front end', name: 'HTML, CSS, JavaScript v1', creator: 'Ashish Juyal', duration: 60 },
	  	{ skills: 'Front end', name: 'HTML, CSS, JavaScript v2', creator: 'Abhinav Kumar', duration: 30 }
	  ];
	  var Test = {
	    all: tests,
	    add: function(test) {
	    	this.all.push(test);
	    }
	  };

	  return Test;
	});