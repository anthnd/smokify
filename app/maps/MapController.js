smokifyApp.controller('MapController', ['$scope', 'MapData', function($scope, MapData) {
    $scope.maps = MapData;
//    console.log(MapData)

    $scope.mapIndex = $scope.maps.mapIndex;
}]);
