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
                dicePool[i].currentValue = 'r0';
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
            this.currentValue = 'r0';
            this.sidesCount = 6;
            this.sidesTable = ['r0','r0','r0','r1','r1','r2'];
        }
    }

    class BlueDie {
        constructor() {
            this.name = "blue";
            this.currentValue = 'r0';
            this.sidesCount = 8;
            this.sidesTable = ['r0','r0','r1','r1','r1','r1','r2','r2'];
        }
    }

    class YellowDie {
        constructor() {
            this.name = "yellow";
            this.currentValue = 'r0';
            this.sidesCount = 6;
            this.sidesTable = ['r0','r1','r2','r2','r5','r7'];
        }
    }

    class RedDie {
        constructor() {
            this.name = "red";
            this.currentValue = 'r0';
            this.sidesCount = 10;
            this.sidesTable = ['r0','r0','r8','r8','r14','r14','r12','r4','r4','r9'];
        }
    }

    class GreenDie {
        constructor() {
            this.name = "green";
            this.currentValue = 'r0';
            this.sidesCount = 10;
            this.sidesTable = ['r0','r12','r1','r1','r1','r1','r13','r13','r2','r2'];
        }
    }

    class BlackDie {
        constructor() {
            this.name = "black";
            this.currentValue = 'r0';
            this.sidesCount = 6;
            this.sidesTable = ['r0','r0','r0','r3','r3','r4'];
        }
    }

    class PurpleDie {
        constructor() {
            this.name = "purple";
            this.currentValue = 'r0';
            this.sidesCount = 8;
            this.sidesTable = ['r0','r3','r3','r4','r6','r10','r10','r11'];
        }
    }

    /*
        DICE RESULT:
        r0 - EMPTY
        r1 - SUCCESS
        r2 - BOON
        r3 - FAIL
        r4 - BANE
        r5 - COMET
        r6 - CHAOS
        r7 - SUCCESS+
        r8 - SUCCESS SUCCESS
        r9 - BOON BOON
        r10 - FAIL FAIL
        r11 - BANE BANE
        r12 - SUCCESS BOON
        r13 - SUCCESS DELAY
        r14 - SUCCESS SUFFER
    */
}
)();