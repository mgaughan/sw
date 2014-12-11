'use strict';

describe('Controller: EdgesController', function () {

  var scope;

  beforeEach(module('swFrontApp'));
  
  beforeEach(inject(function($controller, $rootScope){
    
    scope = $rootScope.$new();

    $controller('EdgesController', {
      $scope: scope
    });

  }));

  describe('displayRequirements', function(){
  	
  	var reqs;

    it('it concatenates name and value of the requirement', function(){
    	reqs = [{name: 'Agility', value: 'd6'}];
    	expect(scope.displayRequirements(reqs)).toEqual('Agility d6');
    });

    it('it ignores name if it is null', function(){
    	reqs = [{name: null, value: 'Novice'}];
    	expect(scope.displayRequirements(reqs)).toEqual('Novice');
    });

    it('it deliminates requirements by commas', function(){
    	reqs = [
    		{name: null, value: 'Novice'},
    		{name: 'Agility', value: 'd6'}
		];
    	expect(
    		scope.displayRequirements(reqs)
		).toEqual('Novice, Agility d6');
    });

  });

});
