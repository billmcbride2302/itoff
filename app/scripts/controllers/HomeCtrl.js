(function() {
    function HomeCtrl($scope, $firebaseObject, $firebaseArray) {
        var ref = firebase.database().ref(); 
        $scope.data = $firebaseObject(ref); 
        $scope.tasks = $firebaseArray(ref); 
        $scope.hello = "hello"; 
        
        
        $scope.addTask = function() {
            $scope.tasks.$add({
            text: $scope.newTaskText})
        };
        
        angular
        .module('itOff')
        .controller('HomeCtrl', ['$scope', '$firebaseObject', '$firebaseArray', HomeCtrl]);
        }  
})();