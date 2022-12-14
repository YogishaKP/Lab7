angular.module("Myemp",[])
.filter("myfilter",function()
{
    return function(input,option)
    {
        if(isNaN(option)||(option==""))
        {
            return input;
        }
        else {
        return input.substring(0,option).toUpperCase();
    }}
})
.controller("empCtrl",function($scope)
{
    var employees=[
        {id:1,name:'Car',rdate:new Date("may 12,2021"),cscale:'Low Cost',price:"450",Rating:10},
        {id:2,name:'Bike',rdate:new Date("June 20,2022"),cscale:'High Cost',price:"500",Rating:10},
        {id:3,name:'Jeep',rdate:new Date("april 19,2021"),cscale:'Low Cost',price:"299",Rating:9.5},
        {id:4,name:'Duck',rdate:new Date("jan 21,2022"),cscale:'Medium Cost',price:"499",Rating:9.8},
        {id:5,name:'House',rdate:new Date("aug 21,2021"),cscale:'Medium Cost',price:"400",Rating:10},
        {id:6,name:'Sheep',rdate:new Date("sep 21,2022"),cscale:'Low Cost',price:"250",Rating:8},
        {id:7,name:'Deer',rdate:new Date("oct 21,2021"),cscale:'Medium Cost',price:"400",Rating:8},
        {id:8,name:'Ship',rdate:new Date("feb 21,2022"),cscale:'High Cost',price:"600",Rating:9}
    ];
    $scope.employees=employees;
    $scope.rowlimit=8;
    $scope.collimit=6;

});