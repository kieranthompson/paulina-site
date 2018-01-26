function initMap() {
    var uluru = {lat: 51.756304, lng: 19.457239};
    var map = new google.maps.Map(document.getElementById('map_id'), {
      zoom: 17,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }