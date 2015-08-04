'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('phones/phones.json').success(function(data) {
      //alert(data);
      $scope.phones = data;
    });

    $scope.orderProp = 'age';
  }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$http', '$routeParams',
  function($scope, $http, $routeParams) {
  $scope.barcodes = [];
  Rho.Barcode.enable({}, function(scan) 
    {
      $scope.barcodes.push(scan);
      $scope.$apply();
      window.scrollTo(0,document.body.scrollHeight);
    })
	$http.get('phones/phones.json').success(function(phone) {
		for(var i= 0; i < phone.length; i++)
		{
			if (phone[i].id == $routeParams.phoneId)
			{
				$scope.phone = phone[i];
			}
		}
    });
  }]);
