var app = angular.module('FundooModalApp', ['fundoo.services'])
  .controller('MainCtrl', ['$scope', 'createDialog', function ($scope, createDialogService) {
    $scope.launchSimpleModal = function () {
      createDialogService('simpleModal.html', {
        id: 'simpleDialog',
        title: 'A Simple Modal Dialog',
        backdrop: true,
        modalClass: 'bootstrap-modal',
        success: {label: 'Success', fn: function () {
          console.log('Successfully closed simple modal');
        }}
      });
    };
    $scope.launchComplexModal = function () {
      createDialogService('complexModal.html', {
        id: 'complexDialog',
        title: 'A Complex Modal Dialog',
        backdrop: true,
        controller: 'ComplexModalController',
        modalClass: 'bootstrap-modal',
        closeable: false,
        success: {label: 'Success', fn: function () {
          console.log('Successfully closed complex modal');
        }}
      }, {
        myVal: 15,
        assetDetails: {
          name: 'My Asset',
          description: 'A Very Nice Asset'
        }
      });
    };

    $scope.launchCompiledModal = function () {
      var template = '<div class="row-fluid"> ' +
        '<h3>To launch compiled modal pass angular.element() wrapped DOM instead of .html file name</h3> ' +
        '<div> ' +
        '<div style="border:2px solid; border-radius:2px; background-color:#c9e2b8; margin-left:10px; margin-top:10px; margin-right:10px; padding-left:10px; margin-bottom:20px; padding-top:20px; padding-bottom:20px; padding-right:20px"> ' +
        ' I am compiled template ' +
        ' </div> </div> </div> ';

      createDialogService(angular.element(template), {
        id: 'compiledDialog',
        title: 'A Compiled Modal Dialog',
        backdrop: true,
        modalClass: 'bootstrap-modal'
      });
    };

  }])
  .factory('SampleFactory', function () {
    return {
      sample: function () {
        console.log('This is a sample');
      }
    };
  })
  .controller('ComplexModalController', ['$scope', 'SampleFactory', 'myVal', 'assetDetails',
    function ($scope, SampleFactory, myVal, assetDetails) {
      $scope.myVal = myVal;
      $scope.asset = assetDetails;
      SampleFactory.sample();
    }]);
