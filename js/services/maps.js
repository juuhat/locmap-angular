angular.module('locmap.services')

.factory('MapsService', function() {
  var map;

  return {
    initMap: function(lat, lng) {
      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: lat, lng: lng},
        zoom: 8
      });
    },

    addMarker: function(title, lat, lng) {
      var marker = new google.maps.Marker({
          position: {lat: lat, lng: lng},
          map: map,
          title: title
      });
    },

    addClickListener: function() {
      google.maps.event.addListener(map, 'click', function(e) {

      });
    }
  }
})
