(function() {
    'use strict';

    angular.module('DiceRoller')
        .service('DiceService', DiceService);

    //DiceService.$inject =[];
    function DiceService() {
        
        var service = this;
        var dicePool = []; //always table of Objects

        service.getDicePool = function() {
            return dicePool;
        }

        service.addDie = function(dieColor) {
            //when dice is added to pool, show empty dice in pool
            for(var i in dicePool) {
                dicePool[i].courrentValue = '0';
            }

            switch(dieColor) {
                case 'white': dicePool.push(new WhiteDie());
                    break;
                case 'blue': dicePool.push(new BlueDie());
                    break;
                default: console.log("No such die");
            }
        }

        service.rollDice = function() {
            for(var die in dicePool) {
                dicePool[die].currentValue = 
                    dicePool[die].sidesTable[(dicePool[die].sidesCount * Math.random() | 0)];
                console.log(dicePool[die]);
            }
        }

        service.resetPool = function() {
            dicePool = [];
            //may add history

            return dicePool;
        }

        function randomizeDice(dicePoolRsults) {
            for(var die in dicePool) {
                dicePool[die].currentValue = 
                    dicePool[die].sidesTable[(dicePool[die].sidesCount * Math.random() | 0)];
                console.log(dicePool[die]);
            }
        }
    }

    class WhiteDie {
        constructor() {
            this.name = "white";
            this.currentValue = '0';
            this.sidesCount = 6;
            this.sidesTable = ['0','0','0','1','1','2'];
        }
    }

    class BlueDie {
        constructor() {
            this.name = "blue"
            this.currentValue = '0';
            this.sidesCount = 8;
            this.sidesTable = ['0','0','1','1','1','1','2','2'];
        }
    }
}
)();