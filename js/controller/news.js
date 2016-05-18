'use strict';

/* Controllers */

var appgaApp = angular.module('appgaApp', ['appgaAppService']);

appgaApp.controller('NewsCtrl', function($scope,$http, newsService) {
	
	$http({
        method : "GET",
        url : "http://etimeexp.com/appga/api/news/recent"
    }).then(function mySucces(response) {
		if (response.data.resultCode != 1){
			return;
		}
        if (response.data.entity.length > 3){
			$scope.recentNews = response.data.entity.slice(0, 3);
		}
		else{
			$scope.recentNews = response.data.entity;
		}
		
    }, function myError(response) {
        $scope.recentNews = [{newsId:24, subject:"1"}, {newsId:25, subject:"2"}];
    });
	
	$scope.selectNews = function (id){
		newsService.setCurrentNewsId(id);
	}
  
});