smokifyApp.controller('MapController', ['$scope', function($scope) {
    $scope.maps = [];

    $scope.maps.cache = {
        title: 'Cache',
        description: 'A fairly popular map largely developed by FMPONE, Cache has a clean design with a lot of room for individuals to make plays. Controlling mid as either the Terrorists or Counter-Terrorists greatly facilitates and strengthens the execution of takes and retakes, allowing for quick flanks to pinch in on any unsuspecting players.'
    };

    $scope.maps.cobblestone = {
        title: 'Cobblestone',
        description: 'A long-standing map in the Counter-Strike series, Cobblestone has gone through innumerable large-scale reworks leading to its current state in Global Offensive. In its current iteration, Cobblestone is a large, open map where it seems most Terrorist executions tend towards the B site - a notoriously hard site to hold due to the numerous entrances the terrorists can use to surround any unfortunate defenders.'
    };

    $scope.maps.dust2 = {
        title: 'Dust II',
        description: 'The most popular map across all versions of Counter-Strike, Dust II is loved by casual and professional players alike for its ease and simplicity. Tactics are quick to setup and can be done with little co-operation. Dust II doesn\'t require as many smokes or flashes compared to other maps, but there\'s still room for some grenades to make your life easier.'
    };

    $scope.maps.inferno = {
        title: 'Inferno',
        description: 'Recently removed to be reworked, Inferno is another classic map in the Counter-strike series. The Global Offensive version has a tight layout with many narrow paths and hallways to provide for some tense close quarters combat. Inferno is generally considered to be a CT-sided map due to how difficult it is for Terroristss to take a site if the Counter-Terrorists use their grenades correctly.'
    };

    $scope.maps.mirage = {
        title: 'Mirage',
        description: 'With a similar sandy feel to Dust II, Mirage is a map where snipers and riflers alike can enjoy an array of duels with the enemy players. The design of the map allows for a plethora of strategies that Terrorists can choose from to keep the Counter-Terrorists guessing and many nice grenade spots to help give a team the upper hand.'
    };

    $scope.maps.overpass = {
        title: 'Overpass',
        description: 'A new map unique to Counter-Strike: Global Offensive, Overpass is a very layered map filled with plenty of ramps, stairs and ladders to get players around. Counter-Terrorists will struggle to maintain map control as the Terrorists close in from a variety of angles, but there are plenty of unexpected corners to fall back to that can quickly shut down any careless Terrorists.'
    };

    $scope.maps.train = {
        title: 'Train',
        description: 'An old favorite in the Counter-Strike series, players thrown into Train will find themselves surrounded by towering trains and buildings. A fairly vast map compared to other maps, Terrorists must chip away at the Counter-Terrorists defense from the outer perimeter of the facility if they want to succeed. Smokes are essential for blocking off many of the places a Counter-Terrorist could be waiting to pounce.'
    }
}]);
