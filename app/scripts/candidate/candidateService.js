'use strict';

angular.module('news.candidate.services', [
	])
	.factory('Candidate', function () {
	  
	  var candidates = [
	  	{ name: 'Pinakin Mistry', phone: '9819515125', email: 'pmistry@gmail.com', skypeId: 'pmistry', skills: 'Front end' },
	  	{ name: 'Aditya Sethi', phone: '9819515126', email: 'asethi@gmail.com', skypeId: 'asethi', skills: 'Front end' }
	  ];
	  var Candidate = {
	    all: candidates,
	    add: function(candidate) {
	    	this.all.push(candidate);
	    }
	  };

	  return Candidate;
	});