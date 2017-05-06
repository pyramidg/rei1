var myApp = angular.module('myApp', []);



myApp.controller('MyController', function MyController($scope) {
  $scope.author = {
    'name'  : 'Pyramid Guest',
    'title' : 'Staff Athur',
    'company' : 'lynda.com'

  }
});


//
// myApp.controller('AppCtrl', function($scope) {
//   $scope.title1 = 'Button';
//   $scope.title4 = 'Warn';
//   $scope.isDisabled = true;
//
//   $scope.googleUrl = 'http://google.com';
//
// });



// Material design module

// angular
//   .module('inputIconDemo', ['ngMaterial', 'ngMessages'])
//   myApp.controller('DemoCtrl', function($scope) {
//     $scope.user = {
//       name: 'John Doe',
//       email: '',
//       phone: '',
//       address: 'Mountain View, CA',
//       donation: 19.99
//     };
//   });
