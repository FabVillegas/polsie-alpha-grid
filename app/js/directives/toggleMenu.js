angular.module('polsie-alpha-grid').directive('toggleMenu', function($window, $document){
  return {
    restrict: 'C', // detects an classname
    scope: false, // parent scope
    link: function(scope, element, attrs){

      if ($document[0].body.offsetWidth >= 768){
        scope.displayIcon = false;
        scope.isShown = true;
      }
      else{
        scope.displayIcon = true;
        scope.isShown = true;
      }

      var target = angular.element($window);
      scope.display = function(value){
        scope.$apply('displayIcon = ' + value);
      };
      target.bind('resize', function(){
        var currentSize = $document[0].body.offsetWidth;
        if (currentSize < 768){
          scope.display(true);
        }
        else{
          scope.display(false);
          scope.$apply('isShown = ' + true); /* show menu */
        }
      });
    }
  } /* return closer */
});
