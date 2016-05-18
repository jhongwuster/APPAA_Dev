'use strict';

/* Controllers */
var appgaApp = angular.module('appgaApp', ['appgaAppService','ngAnimate', 'ui.bootstrap']);

appgaApp.controller('NewsPageListCtrl', function($scope,$http, newsService) {
	
	$scope.maxSize = 5;
	$scope.pageSize = 9;
	$scope.bigCurrentPage = 1;
	$scope.totalItems = 1;
	
	var httpUrl = "http://etimeexp.com/appga/api";
	//var httpUrl = "http://192.168.1.9:8080/api";
  
	$http({
        method : "GET",
        url : httpUrl + "/news/newsList?page=" + $scope.bigCurrentPage + "&page.size=" + $scope.pageSize
    }).then(function mySucces(response) {
		if (response.data.resultCode != 1){
			return;
		}
		
		$scope.totalItems = response.data.entity.totalPages * $scope.pageSize;
		$scope.newsPageList = response.data.entity.newsDTOList;
    }, function myError(response) {
        $scope.newsPageList = [{newsId:24, subject:"1"}, {newsId:25, subject:"2"}];
    });
	
	$scope.selectNews = function (id){
		newsService.setCurrentNewsId(id);
	}
	
	 $scope.setPage = function (pageNo) {
    $scope.bigCurrentPage = pageNo;
  };

  $scope.pageChanged = function() {
    $http({
        method : "GET",
        url : httpUrl + "/news/newsList?page=" + $scope.bigCurrentPage + "&page.size=" + $scope.pageSize
    }).then(function mySucces(response) {
		if (response.data.resultCode != 1){
			return;
		}
        
		$scope.numPages = response.data.entity.totalPages;
		$scope.newsPageList = response.data.entity.newsDTOList;
    }, function myError(response) {
        $scope.newsPageList = [{newsId:24, subject:"1"}, {newsId:25, subject:"2"}];
    });
  };
  
});