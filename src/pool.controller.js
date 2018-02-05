(function() {
    'use strict';

    angular.module('DiceRoller')
        .controller('PoolController', PoolController)
        .directive('dieInPool', DieInPool);

        PoolController.$inject = ['DiceService']
        function PoolController(DiceService) {
            
            var ctrl = this;
            
            ctrl.getPool = function() {
                return DiceService.getDicePool();
            }

            ctrl.clickDieInPool = function(index) {
                DiceService.clickDieInPool(index);
            }
        }

        function DieInPool(){
            return {
                templateUrl: "src/die.html" 
            }
        }
}
)();