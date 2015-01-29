angular.module('polsie-alpha-grid').controller('homeCtrl', homeCtrl);

homeCtrl.$inject = ['$scope', '$document'];

function homeCtrl($scope, $document){

  $scope.showLinks = function(){
    $scope.isShown = !$scope.isShown;
  };

};
