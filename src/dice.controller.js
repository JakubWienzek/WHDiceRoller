(function() {
    'use strict';

    angular.module('DiceRoller')
        .controller('DiceController', DiceController);

        DiceController.$inject = ['DiceService']
        function DiceController(DiceService) {
            
            var ctrl = this;

            ctrl.addBlueDie = function() {
                DiceService.addDie("blue");
            }

            ctrl.addWhiteDie = function() {
                DiceService.addDie("white");
            }

            ctrl.addYellowDie = function() {
                DiceService.addDie("yellow");
            }

            ctrl.addRedDie = function() {
                DiceService.addDie("red");
            }

            ctrl.addGreenDie = function() {
                DiceService.addDie("green");
            }

            ctrl.addBlackDie = function() {
                DiceService.addDie("black");
            }

            ctrl.addPurpleDie = function() {
                DiceService.addDie("purple");
            }
        }
}
)();