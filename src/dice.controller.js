(function() {
    'use strict';

    angular.module('DiceRoller')
        .controller('DiceController', DiceController);

        DiceController.$inject = ['DiceService']
        function DiceController(DiceService) {
            var ctrl = this;
            var dicePool = [];

            ctrl.dicePool = function() {
                console.log(dicePool);
                return dicePool;
            }

            function getDicePool() {
                dicePool = [];
                var dicePoolTemp = DiceService.getDicePool();
                for(var i in dicePoolTemp) {
                    dicePool.push(dicePoolTemp[i].name);
                }
            }

            ctrl.addBlueDie = function() {
                DiceService.addDie("blue");
                getDicePool();
            }

            ctrl.addWhiteDie = function() {
                DiceService.addDie("white");
                getDicePool();
            }

            ctrl.addWrongDie = function() {
                DiceService.addDie("wrong");
                getDicePool();
            }
        }
}
)();