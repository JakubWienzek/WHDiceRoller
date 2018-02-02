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

            ctrl.addBlueDie = function() {
                DiceService.addDie("blue");
            }

            ctrl.addWhiteDie = function() {
                DiceService.addDie("white");
            }

            ctrl.addWrongDie = function() {
                DiceService.addDie("wrong");
            }
        }
}
)();