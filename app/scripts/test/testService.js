'use strict';

angular.module('news.test.services', [
	])
	.factory('Test', function () {
	  
	  var tests = [
	  	{ skills: 'Front end', name: 'HTML, CSS, JavaScript v1', creator: 'Ashish Juyal', type: 'Initial screening',
	  	  questions: [
	  	  	{
		  	  	type: 'Single Answer',
		  	  	text: 'Q1',
		  	  	options: [
		  	  		{text: 'o1'},
		  	  		{text: 'o2'},
		  	  		{text: 'o3'}
		  	  	]
		  	  },
		  	  {
		  	  	type: 'Multiple Answers',
		  	  	text: 'Q2',
		  	  	options: [
		  	  		{text: 'o1'},
		  	  		{text: 'o2'},
		  	  		{text: 'o3'}
		  	  	]
		  	  },
		  	  {
		  	  	type: 'Textual',
		  	  	text: 'T1'
		  	  },
		  	  {
		  	  	type: 'Exercise',
		  	  	text: 'Exercise 1'
		  	  }
	  	  ]
	  	},
	  	{ skills: 'Front end', name: 'HTML, CSS, JavaScript v2', creator: 'Abhinav Kumar', type: 'Tech round' }
	  ];
	  var Test = {
	    all: tests,
	    add: function(test) {
	    	this.all.push(test);
	    }
	  };

	  return Test;
	});