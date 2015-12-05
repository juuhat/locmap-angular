angular.module('locmap.controllers')

.controller('CollectionCtrl', function($scope, $state, $stateParams, ResourcesService, UserService, MapsService) {
  ResourcesService.get('collections/' + $stateParams.id).then(function(collection) {
    $scope.collection = collection;
    console.log(collection);

    if (collection.locations.length > 0) {
      MapsService.initMap(collection.locations[0].latitude, collection.locations[0].longitude);
    }

    collection.locations.forEach(function(l) {
      MapsService.addMarker(l.title, l.latitude, l.longitude);
    });

    MapsService.fitBounds();
  });
});
