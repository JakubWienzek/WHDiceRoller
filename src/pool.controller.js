(function() {
    'use strict';

    angular.module('DiceRoller')
        .controller('PoolController', PoolController);

        PoolController.$inject = ['DiceService']
        function PoolController(DiceService) {
            var ctrl = this;
            var pool = [];

            this.getPool = function() {
                return pool;
            }

            this.roll = function() {
                pool = [];
                var poolTemp = DiceService.rollDice();
                for(var i in poolTemp) {
                    pool.push(poolTemp[i].currentValue);
                }
                console.log(pool);
            }

            this.reset = function() {
                pool = DiceService.resetPool();
            }
        }
}
)();