// Created by following the tutorial at https://developers.google.com/maps/documentation/javascript/tutorial

/**Called when the Google map has been successfully retrieved from the server
 *
 */
function gMapLoaded() {

    // Create a new Google Map object
    map = new google.maps.Map(document.getElementById('googleMaps'), {
        center: {lat: -33.8688, lng: 151.2195},
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP

    });

    // Display the user's current position on the map
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(setPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this device.";
    }

    // Create the search box and display it on screen
    var input = document.getElementById('pac-input');
    var searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    // Bias the SearchBox results towards current map's viewport.
    map.addListener('bounds_changed', function () {
        searchBox.setBounds(map.getBounds());
    });

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
                icon: "https://maps.google.com/mapfiles/kml/shapes/parking_lot_maps.png",
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

    /** Show the user's map position on screen
     *
     * @param position - User's latitude and longitude position
     */
    function setPosition(position) {
        pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        map.setCenter(pos, 5);
        console.log(position);
        $.mobile.loading("hide");

    }

    //Create a new parking icon to be used as a marker
    var icon = {
        url: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Parking_icon.svg", //url
        scaledSize: new google.maps.Size(35, 35),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 0)
    };

    //Retrieve the positions of each car park from the server
    getAjax("carParkPositions", placeMarkers);

    /**Place the markers on screen for user selection
     *
     * @param data - The car park positions retrieved from the server
     */
    function placeMarkers(data){

        markerArray = JSON.parse(data);

        //Place a marker for each item in array
        for(var i = 0; i < markerArray.length; i ++) {

            marker = new google.maps.Marker({
                icon: icon,
                map: map,
                draggable: false,
                animation: google.maps.Animation.DROP,
                position: {
                    lat: markerArray[i].lat, lng: markerArray[i].lng
                }
            });

            marker.addListener('click', click);

        }

    }

}