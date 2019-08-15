'use strict';
angular.module('blogList')
	.component('blogList', {
		//template: "<div class='container-fluid'><h1 class='text-danger'>{{ title }}</h1><h3 class='text-primary'>Clicks number: {{ clicks }}</h1><button ng-click='changeTitle()'>Change</button></div>",
		templateUrl: '/test-angularjs/templates/blog-list.html',
		controller: function($scope){
			var blogItems = [
				{
					title: 'Some Title One', id: 1, description: 'This is book'
				},
				{
					title: 'Some Title Two', id: 2, description: 'This is book'
				},
				{
					title: 'Some Title Three', id: 3, description: 'This is book'
				},
				{
					title: 'Some Title Four', id: 4, description: 'This is book'
				},
				{
					title: 'Some Title Five', id: 5, description: 'This is book'
				},
				{
					title: 'Some Title Six', id: 6, description: 'This is book'
				},
				{
					title: 'Some Title Seven', id: 7, description: 'This is book'
				},
				{
					title: 'Some Title Eight', id: 8, description: 'This is book'
				}
			];
			$scope.items = blogItems;
			$scope.title = 'Hello, World!!!';
			$scope.clicks = 0;
			$scope.changeTitle = function(){
				$scope.title = 'Hello, Carlos!!!';
				$scope.clicks += 1;
			}
		}
	});
	//.component('blogList');