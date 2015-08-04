'use strict';

/* Filters */

angular.module('rhoBarcodeFilters', []).filter('barcodefilter', function() {
  return function(input) {
    return (input.substring(0, 1) == '5') ? 'ACME:' + input : 'OIL CITY:' + input;
  };
});
