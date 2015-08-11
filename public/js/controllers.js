'use strict';

/* Controllers */

var zebraDeviceControllers = angular.module('zebraDeviceControllers', []);

zebraDeviceControllers.controller('DeviceListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('devices/devices.json').success(function(data) {
      //alert(data);
      $scope.devices = data;
    });

    $scope.orderProp = 'age';
  }]);

zebraDeviceControllers.controller('DeviceDetailCtrl', ['$scope', '$http', '$routeParams',
  function($scope, $http, $routeParams) {
  $scope.barcodes = [];
  if (typeof Rho !== 'undefined')
  {
    Rho.Barcode.enable({}, function(scan) 
      {
        $scope.barcodes.push(scan);
        $scope.$apply();
        window.scrollTo(0,document.body.scrollHeight);
      })  
    }
  	$http.get('devices/devices.json').success(function(devices) {
  		for(var i= 0; i < devices.length; i++)
  		{
  			if (devices[i].id == $routeParams.deviceId)
  			{
  				$scope.device = devices[i];
  			}
  		}
      });

}]);
