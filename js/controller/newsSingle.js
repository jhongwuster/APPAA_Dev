'use strict';

/* Controllers */

var appgaApp = angular.module('appgaApp', ['appgaAppService']);

appgaApp.controller('NewsSingleCtrl', ['$scope', '$http','$sce','newsService', function($scope,$http,$sce, newsService) {
	$scope
	$http({
        method : "GET",
        url : "http://etimeexp/appga/api/news/" + newsService.getCurrentNewsId()
    }).then(function mySucces(response) {
		if (response.data.resultCode != 1){
			return;
		}
        
		$scope.singleNews = response.data.entity;
    }, function myError(response) {
        $scope.singleNews = {};
    });
	
	$scope.safeContent = function() {
		if (null == $scope.singleNews || null == $scope.singleNews.content){
			return null;
		}
		return $sce.trustAsHtml($scope.singleNews.content);
	};
  
}]);