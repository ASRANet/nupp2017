window.onload = function () {

    checkKeyDeadlines();

};

//Check if date of key deadlines has passed and update HTML and progress bar as required
function checkKeyDeadlines() {

    //If changing dates also change in HTML
    var keyDeadlines = [{event: "Deadline for abstracts", textDate: "6 Jan 2016"},
        {event: "Notification of acceptance", textDate: "6 Aug 2016"},
        {event: "Early bird registration", textDate: "22 Nov 2016"},
        {event: "Submission of full papers", textDate: "4 Jan 2017"},
        {event: "Registration closes", textDate: "22 Jan 2017"}];
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth();
    var year = currentDate.getFullYear();
    var lastDeadline = -1;
    var lastDeadlineChanged = false;
    var newHTML = "<tr>";

    for (var index =  0; index < keyDeadlines.length; index++) {

        lastDeadlineChanged = false;

        var newDate = keyDeadlines[index].textDate.split(" ");

        if (newDate[2] < year) {
            lastDeadline = index;
            lastDeadlineChanged = true;
        }

        else if (newDate[2] == year) {
            if (months.indexOf(newDate[1]) < month) {
                lastDeadline = index;
                lastDeadlineChanged = true;
            }

            else if (months.indexOf(newDate[1]) == month) {
                if (newDate[0] < day) {
                    lastDeadline = index;
                    lastDeadlineChanged = true;
                }

            }

        }

        if(lastDeadlineChanged){
            newHTML += "<td><del>" + keyDeadlines[index].event + "</del><br><del>" + keyDeadlines[index].textDate + "</del></td>";
        }
        else{
            newHTML += "<td><p>" + keyDeadlines[index].event + "<br>" + keyDeadlines[index].textDate + "</p></td>";
        }

    }

    var newProgress = (lastDeadline + 1) * 20;
    $("#datesProgress").css('width', newProgress +'%').attr('aria-valuenow', newProgress);

    newHTML += "</tr>";
    $("#keyDeadlinesTable").html(newHTML);

}

//Set the side navbar to stick when a certain point in the page is reached
$(function () {

    var sidebarNav = $("#sidebarNav");

    $('#sidebar').height(sidebarNav.height());

    sidebarNav.affix({
        offset: {top: (sidebarNav.offset().top - ($(window).height() / 3))}
    });
});

//From http://www.paulund.co.uk/smooth-scroll-to-internal-links-with-jquery
//Scroll down slowly when button is pressed
$('a[href^="#"]').on('click', function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 900, 'swing', function () {
        window.location.hash = target;
    });
});

// Created by following the tutorial at https://developers.google.com/maps/documentation/javascript/tutorial

/**Called when the Google map has been successfully retrieved from the server
 *
 */
function gMapLoaded() {

    // Show the loading sign until the user's current position is displayed on the map
    $.mobile.loading("show");

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