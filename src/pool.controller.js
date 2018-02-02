(function() {
    'use strict';

    angular.module('DiceRoller')
        .controller('PoolController', PoolController);

        PoolController.$inject = ['DiceService']
        function PoolController(DiceService) {
            var ctrl = this;

            ctrl.getResults = function() {
                var results = [];
                var pool = DiceService.getDicePool();


                for(var i in pool) {
                    results.push(pool[i].currentValue);
                }

                return results;
            }
            
            ctrl.getPool = function() {
                return DiceService.getDicePool();
            }
        }
}
)();