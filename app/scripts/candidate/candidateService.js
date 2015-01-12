'use strict';

angular.module('news.candidate.services', [
	])
	.factory('Candidate', function () {
	  
	  var candidates = [
	  	{ name: 'Pinakin Mistry', phone: '9819515125', email: 'pmistry@gmail.com', skypeId: 'pmistry', skills: 'Front end', status: 'Just added' }
	  ];
	  var Candidate = {
	    all: candidates,
	    add: function(candidate) {
	    	this.all.push(candidate);
	    }
	  };

	  return Candidate;
	});