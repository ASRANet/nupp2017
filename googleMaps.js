// Created by following the tutorial at https://developers.google.com/maps/documentation/javascript/tutorial

var map = {};

function createNewMap(){
    if(location.pathname == "/nupp2017/travel.html")googleMap(loadingComplete);
    else if(location.pathname == "/nupp2017/accomodation.html")googleMap(showAccomodation);
}

/**Called when the Google map has been successfully retrieved from the server
 *
 */
function googleMap(callback) {

    // Create a new Google Map object
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 51.376200, lng: -0.097791},
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    callback(map);
}

setUpSearchBox = function(){

    if(map == {})return;

    // Create the search box and display it on screen
    var searchBox = new google.maps.places.SearchBox(document.getElementById('locationInput'));

    var markers = [];
    // Listen for clicks on the search box results
    searchBox.addListener('places_changed', function () {
        var places = searchBox.getPlaces();

        if (places.length == 0) {
            return;
        }

        // Delete the old markers.
        markers.forEach(function (marker) {
            marker.setMap(null);
        });
        markers = [];

        // For each place get the icon, name and location.
        var bounds = new google.maps.LatLngBounds();
        places.forEach(function (place) {
            var icon = {
                url: place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25)
            };

            // Create a marker for each place.
            markers.push(new google.maps.Marker({
                map: map,
                title: place.name,
                position: place.geometry.location
            }));

            if (place.geometry.viewport) {
                // Only geocodes have viewport.
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
        });
        map.fitBounds(bounds);
    });

};

setPosition = function (position) {

    if(map == {})return;

    pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    map.setCenter(pos, 5);
};

getLocation = function(callback) {

    if(map == {})return;

    // Display the user's current position on the map
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(callback);
    } else {
        //Set up alert or div
        x.innerHTML = "Geolocation is not supported by this device.";
    }

};