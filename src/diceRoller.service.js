(function() {
    'use strict';

    angular.module('DiceRoller')
        .service('DiceService', DiceService);


    function DiceService() {
        
        var service = this;
        var dicePool = [];

        service.getDicePool = function() {
            return dicePool;
        }

        service.rollDice = function() {
            randomizeDice();
            
            return dicePool;
        }

        service.resetPool = function() {
            dicePool = [];
            //may add history

            return dicePool;
        }

        service.addDie = function(dieColor) {
            switch(dieColor) {
                case 'white': dicePool.push(new WhiteDie());
                    break;
                case 'blue': dicePool.push(new BlueDie());
                    break;
                default: console.log("No such die");
            }
        }

        function randomizeDice() {
            for(var die in dicePool) {
                dicePool[die].currentValue = 
                    dicePool[die].sidesTable[(dicePool[die].sidesCount * Math.random() | 0)];
                console.log(dicePool[die]);
            }
        }
    }

    class WhiteDie {
        constructor() {
            this.name = "White";
            this.currentValue = '0';
            this.sidesCount = 6;
            this.sidesTable = ['0','0','0','1','1','2'];
        }
    }

    class BlueDie {
        constructor() {
            this.name = "Blue"
            this.currentValue = '0';
            this.sidesCount = 8;
            this.sidesTable = ['0','0','1','1','1','1','2','2'];
        }
    }
}
)();