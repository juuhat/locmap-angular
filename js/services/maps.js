angular.module('locmap.services')

.factory('MapsService', function() {
  var map;
  var markers = [];

  return {
    initMap: function(lat, lng) {
      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: lat, lng: lng},
        zoom: 8
      });
    },

    setCenter: function(lat, lng) {
      map.setCenter({lat: lat, lng: lng});
    },

    addMarker: function(title, lat, lng) {
      var marker = new google.maps.Marker({
          position: {lat: lat, lng: lng},
          map: map,
          title: title
      });
      markers.push(marker);
    },

    removeMarkers: function() {
      markers.forEach(function(m) {
        m.setMap(null);
      });
      markers = [];
    },

    addClickListener: function(callback) {
      google.maps.event.addListener(map, 'click', function(e) {
        callback(e);
      });
    }
  }
})
