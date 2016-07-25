
var myApp = angular.module('myApp', ['ngMap']);

myApp.controller('mainCtrl', function ($scope) {
	$scope.ones = [
		{"name": 'A', "address": "B", "rdm": 8},
		{"name": 'C', "address": "D", "rdm": 28},
		{"name": 'B', "address": "C", "rdm": 228}
	];
	$scope.sortField = 'rdm';
	$scope.reverse = true;
});

myApp.controller('CustomControlCtrl', function(NgMap) {
  var vm=this;
  NgMap.getMap().then(function(map) {
    vm.map = map;
  });
  vm.home = new google.maps.LatLng(41.850033, -87.6500523);
  vm.goHome = function() {
    vm.map.setCenter(vm.home);
  }
  vm.setHome = function() {
    vm.home = vm.map.getCenter();
  }
});