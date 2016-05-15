'use strict';

/* Controllers */

var appgaApp = angular.module('appgaApp', ['appgaAppService']);

appgaApp.controller('NewsCtrl', function($scope,$http, newsService) {
	
	$http({
        method : "GET",
        url : "http://192.168.1.5:8080/api/news/recent"
    }).then(function mySucces(response) {
		if (response.data.resultCode != 1){
			return;
		}
        
		$scope.recentNews = response.data.entity;
    }, function myError(response) {
        $scope.recentNews = [{newsId:24, subject:"1"}, {newsId:25, subject:"2"}];
    });
	
	$scope.selectNews = function (id){
		newsService.setCurrentNewsId(id);
	}
  
});