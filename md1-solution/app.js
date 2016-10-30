(function(){
    'use strict';

    angular.module('LunchCheck',[])
        .controller('LunchController', LaunchController);

    LaunchController.$inject=['$scope'];
    function LaunchController($scope){
        var foodCount = 0;

        $scope.alert = '';
        $scope.food = '';
        $scope.checkFood = function(){
            foodCount = countFood($scope.food);

            if (foodCount <= 3 && foodCount >0){
                $scope.alert = 'Enjoy!';
            }
            else if(foodCount === 0){
                $scope.alert = 'Please enter data first!';
            }
            else{
                $scope.alert ='Too much!';
            }
        };
    }
    function countFood(food){
        var count =0;
        var temp_words = food.split(",");
        temp_words.forEach(function(word,index){
            // console.log(index);
            if (word.length != 0){
                count+=1;
            }
        });
        return count;
    }

})();