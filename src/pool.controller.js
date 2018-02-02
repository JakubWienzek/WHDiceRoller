(function() {
    'use strict';

    angular.module('DiceRoller')
        .controller('PoolController', PoolController);

        PoolController.$inject = ['DiceService']
        function PoolController(DiceService) {
            var ctrl = this;
            
            ctrl.getPool = function() {
                return DiceService.getDicePool();
            }
        }
}
)();