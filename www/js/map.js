function initialize() {

	navigator.geolocation.getCurrentPosition(successPosition, failPosition);

	function successPosition(position) {
	var longitude = position.coords.longitude;
	var latitude = position.coords.latitude;
	var myLatlng = new google.maps.LatLng(latitude,longitude);

        var mapOptions = {
          center: myLatlng,
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.TERRAIN
        };


        var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);

        var marker = new google.maps.Marker({
		    position: myLatlng,
		    map: map,
		    title:"Are you here?"
		    });
      }

     function failPosition(error) {
	//change time box to show updated message
	console.log("error");
    }
  }
      google.maps.event.addDomListener(window, 'load', initialize);