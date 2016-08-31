var myapp = angular.module("myProfile", []);

myapp.controller("mainCtrl", function($scope) {
        $scope.author = "Fanny Petersson Sällberg";
    });

myapp.directive("author", function() {
    return {
        template : "Fanny Petersson Sällberg"
    };
});