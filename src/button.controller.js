(function() {
    'use strict';

    angular.module('DiceRoller')
        .controller("ButtonController", ButtonController);


        ButtonController.$inject = ['DiceService'];
        function ButtonController(DiceService) {

            var ctrl = this;
        
            this.roll = function() {
                DiceService.rollDice();
            }

            this.reset = function() {
                DiceService.resetPool();
            }
        }
})();