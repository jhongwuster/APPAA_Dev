'use strict';

/* service */

var appgaApp = angular.module('appgaAppService', []);

appgaApp.factory('newsService', function($window) {
 var currentNews = {};
 currentNews.setCurrentNewsId = function(id) {
   $window.localStorage["CurrentNewsId"] = id;
 };
 currentNews.getCurrentNewsId = function(){
  return $window.localStorage["CurrentNewsId"];
 };
 
 return currentNews;
});
