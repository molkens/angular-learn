(function() {
   'use strict';

    angular.module('ShoppingListCheckOff',[])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService){
        var toBuyList = this;
        toBuyList.items = ShoppingListCheckOffService.getToBuy();
        toBuyList.buy = function(index){
            ShoppingListCheckOffService.buy(index);
        }
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService){
        var boughtList = this;
        boughtList.items = ShoppingListCheckOffService.getBought();

    }

    function ShoppingListCheckOffService(){
        var service = this;
        var toBuy = [
            {
                name:'cookies',
                quantity:10
            },
            {
                name:'fruits',
                quantity:5
            },
            {
                name:'milk',
                quantity:1
            },
            {
                name:'butter',
                quantity:2
            },
            {
                name:'eggs',
                quantity:10
            }
            ];
        var bought =[];

        service.buy = function(itemIndex){
            bought.push(toBuy[itemIndex]);
            toBuy.splice(itemIndex, 1);
        };

        service.getToBuy = function (){
            return toBuy;
        };

        service.getBought = function (){
            return bought;
        }

    }
})();