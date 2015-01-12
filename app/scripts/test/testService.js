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
		  	  		{text: 'a1'},
		  	  		{text: 'b2'},
		  	  		{text: 'c3'}
		  	  	]
		  	  },
		  	  {
		  	  	type: 'Single Answer',
		  	  	text: 'Q3',
		  	  	options: [
		  	  		{text: 'x1'},
		  	  		{text: 'x2'},
		  	  		{text: 'x3'}
		  	  	]
		  	  },
		  	  {
		  	  	type: 'Multiple Answers',
		  	  	text: 'Q4',
		  	  	options: [
		  	  		{text: 'y1'},
		  	  		{text: 'y2'},
		  	  		{text: 'y3'}
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