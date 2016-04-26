smokifyApp.controller('HomeController', ['$scope', 'MapData', function($scope, MapData) {
    $scope.maps = MapData;
//    console.log(MapData);

    $scope.setMapIndex = function(index) {
        MapData.setMapIndex(index);
    }
}]);
