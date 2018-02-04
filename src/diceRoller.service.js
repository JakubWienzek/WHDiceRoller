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
                dicePool[i].currentValue = '0';
            }

            switch(dieColor) {
                case 'white': dicePool.push(new WhiteDie());
                    break;
                case 'blue': dicePool.push(new BlueDie());
                    break;
                case 'yellow': dicePool.push(new YellowDie());
                    break;
                case 'red': dicePool.push(new RedDie());
                    break;
                case 'green': dicePool.push(new GreenDie());
                    break;
                case 'black': dicePool.push(new BlackDie());
                    break;
                case 'purple': dicePool.push(new PurpleDie());
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

        service.removeDie = function(index) {
            dicePool.splice(index,1);
        }
        /*
        function randomizeDice(dicePoolRsults) {
            for(var die in dicePool) {
                dicePool[die].currentValue = 
                    dicePool[die].sidesTable[(dicePool[die].sidesCount * Math.random() | 0)];
                console.log(dicePool[die]);
            }
        }*/
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
            this.name = "blue";
            this.currentValue = '0';
            this.sidesCount = 8;
            this.sidesTable = ['0','0','1','1','1','1','2','2'];
        }
    }

    class YellowDie {
        constructor() {
            this.name = "yellow";
            this.currentValue = '0';
            this.sidesCount = 6;
            this.sidesTable = ['0','1','2','2','5','7'];
        }
    }

    class RedDie {
        constructor() {
            this.name = "red";
            this.currentValue = '0';
            this.sidesCount = 10;
            this.sidesTable = ['0','0','8','8','14','14','12','4','4','9'];
        }
    }

    class GreenDie {
        constructor() {
            this.name = "green";
            this.currentValue = '0';
            this.sidesCount = 10;
            this.sidesTable = ['0','12','1','1','1','1','13','13','2','2'];
        }
    }

    class BlackDie {
        constructor() {
            this.name = "black";
            this.currentValue = '0';
            this.sidesCount = 6;
            this.sidesTable = ['0','0','0','3','3','4'];
        }
    }

    class PurpleDie {
        constructor() {
            this.name = "purple";
            this.currentValue = '0';
            this.sidesCount = 8;
            this.sidesTable = ['0','3','3','4','6','10','10','11'];
        }
    }

    /*
        DICE RESULT:
        0 - EMPTY
        1 - SUCCESS
        2 - BOON
        3 - FAIL
        4 - BANE
        5 - COMET
        6 - CHAOS
        7 - SUCCESS+
        8 - SUCCESS SUCCESS
        9 - BOON BOON
        10 - FAIL FAIL
        11 - BANE BANE
        12 - SUCCESS BOON
        13 - SUCCESS DELAY
        14 - SUCCESS SUFFER
    */
}
)();