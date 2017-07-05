function MainController($scope){
  $scope.name = "Bill"
  $scope.email = "bill@bill.com"
  $scope.phone = '0123456789'
}

angular
  .module('app')
  .controller('MainController', MainController)
