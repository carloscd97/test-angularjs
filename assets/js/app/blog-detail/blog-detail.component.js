'use strict';
angular.module('blogDetail')
	.controller('BlogDetailController', function($scope, $http, $location){
		$http.get("/test-angularjs/assets/json/posts.json").then(successCallback, errorCallback);
		
		function successCallback(response, status, config, statusText){
			$scope.posts = response.data;
		}

		function errorCallback(response, status, config, statusText){
			console.log(response);
		}

	});