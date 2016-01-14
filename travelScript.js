var mapLocation = {};
currencies = [{name: 'Afghanistan', currency: 'AFN'},{name: 'Åland Islands', currency: 'EUR'},{name: 'Albania', currency: 'ALL'},{name: 'Algeria', currency: 'DZD'},{name: 'American Samoa', currency: 'USD'},{name: 'Andorra', currency: 'EUR'},{name: 'Angola', currency: 'AOA'},{name: 'Anguilla', currency: 'XCD'},{name: 'Antigua and Barbuda', currency: 'XCD'},{name: 'Argentina', currency: 'ARS'},{name: 'Armenia', currency: 'AMD'},{name: 'Aruba', currency: 'AWG'},{name: 'Australia', currency: 'AUD'},{name: 'Austria', currency: 'EUR'},{name: 'Azerbaijan', currency: 'AZN'},{name: 'The Bahamas', currency: 'BSD'},{name: 'Bahrain', currency: 'BHD'},{name: 'Bangladesh', currency: 'BDT'},{name: 'Barbados', currency: 'BBD'},{name: 'Belarus', currency: 'BYR'},{name: 'Belgium', currency: 'EUR'},{name: 'Belize', currency: 'BZD'},{name: 'Benin', currency: 'XOF'},{name: 'Bermuda', currency: 'BMD'},{name: 'Bhutan', currency: 'BTN'},{name: 'Bolivia', currency: 'BOB'},{name: 'Bonaire', currency: 'USD'},{name: 'Bosnia and Herzegovina', currency: 'BAM'},{name: 'Botswana', currency: 'BWP'},{name: 'Bouvet Island', currency: 'NOK'},{name: 'Brazil', currency: 'BRL'},{name: 'British Indian Ocean Territory', currency: 'USD'},{name: 'United States Minor Outlying Islands', currency: 'USD'},{name: 'British Virgin Islands', currency: 'USD'},{name: 'Brunei', currency: 'BND'},{name: 'Bulgaria', currency: 'BGN'},{name: 'Burkina Faso', currency: 'XOF'},{name: 'Burundi', currency: 'BIF'},{name: 'Cambodia', currency: 'KHR'},{name: 'Cameroon', currency: 'XAF'},{name: 'Canada', currency: 'CAD'},{name: 'Cape Verde', currency: 'CVE'},{name: 'Cayman Islands', currency: 'KYD'},{name: 'Central African Republic', currency: 'XAF'},{name: 'Chad', currency: 'XAF'},{name: 'Chile', currency: 'CLF'},{name: 'China', currency: 'CNY'},{name: 'Christmas Island', currency: 'AUD'},{name: 'Cocos (Keeling) Islands', currency: 'AUD'},{name: 'Colombia', currency: 'COP'},{name: 'Comoros', currency: 'KMF'},{name: 'Republic of the Congo', currency: 'XAF'},{name: 'Democratic Republic of the Congo', currency: 'CDF'},{name: 'Cook Islands', currency: 'NZD'},{name: 'Costa Rica', currency: 'CRC'},{name: 'Croatia', currency: 'HRK'},{name: 'Cuba', currency: 'CUC'},{name: 'Curaçao', currency: 'ANG'},{name: 'Cyprus', currency: 'EUR'},{name: 'Czech Republic', currency: 'CZK'},{name: 'Denmark', currency: 'DKK'},{name: 'Djibouti', currency: 'DJF'},{name: 'Dominica', currency: 'XCD'},{name: 'Dominican Republic', currency: 'DOP'},{name: 'Ecuador', currency: 'USD'},{name: 'Egypt', currency: 'EGP'},{name: 'El Salvador', currency: 'SVC'},{name: 'Equatorial Guinea', currency: 'XAF'},{name: 'Eritrea', currency: 'ERN'},{name: 'Estonia', currency: 'EUR'},{name: 'Ethiopia', currency: 'ETB'},{name: 'Falkland Islands', currency: 'FKP'},{name: 'Faroe Islands', currency: 'DKK'},{name: 'Fiji', currency: 'FJD'},{name: 'Finland', currency: 'EUR'},{name: 'France', currency: 'EUR'},{name: 'French Guiana', currency: 'EUR'},{name: 'French Polynesia', currency: 'XPF'},{name: 'French Southern and Antarctic Lands', currency: 'EUR'},{name: 'Gabon', currency: 'XAF'},{name: 'The Gambia', currency: 'GMD'},{name: 'Georgia', currency: 'GEL'},{name: 'Germany', currency: 'EUR'},{name: 'Ghana', currency: 'GHS'},{name: 'Gibraltar', currency: 'GIP'},{name: 'Greece', currency: 'EUR'},{name: 'Greenland', currency: 'DKK'},{name: 'Grenada', currency: 'XCD'},{name: 'Guadeloupe', currency: 'EUR'},{name: 'Guam', currency: 'USD'},{name: 'Guatemala', currency: 'GTQ'},{name: 'Guernsey', currency: 'GBP'},{name: 'Guinea', currency: 'GNF'},{name: 'Guinea-Bissau', currency: 'XOF'},{name: 'Guyana', currency: 'GYD'},{name: 'Haiti', currency: 'HTG'},{name: 'Heard Island and McDonald Islands', currency: 'AUD'},{name: 'Honduras', currency: 'HNL'},{name: 'Hong Kong', currency: 'HKD'},{name: 'Hungary', currency: 'HUF'},{name: 'Iceland', currency: 'ISK'},{name: 'India', currency: 'INR'},{name: 'Indonesia', currency: 'IDR'},{name: 'Ivory Coast', currency: 'XOF'},{name: 'Iran', currency: 'IRR'},{name: 'Iraq', currency: 'IQD'},{name: 'Republic of Ireland', currency: 'EUR'},{name: 'Isle of Man', currency: 'GBP'},{name: 'Israel', currency: 'ILS'},{name: 'Italy', currency: 'EUR'},{name: 'Jamaica', currency: 'JMD'},{name: 'Japan', currency: 'JPY'},{name: 'Jersey', currency: 'GBP'},{name: 'Jordan', currency: 'JOD'},{name: 'Kazakhstan', currency: 'KZT'},{name: 'Kenya', currency: 'KES'},{name: 'Kiribati', currency: 'AUD'},{name: 'Kuwait', currency: 'KWD'},{name: 'Kyrgyzstan', currency: 'KGS'},{name: 'Laos', currency: 'LAK'},{name: 'Latvia', currency: 'EUR'},{name: 'Lebanon', currency: 'LBP'},{name: 'Lesotho', currency: 'LSL'},{name: 'Liberia', currency: 'LRD'},{name: 'Libya', currency: 'LYD'},{name: 'Liechtenstein', currency: 'CHF'},{name: 'Lithuania', currency: 'EUR'},{name: 'Luxembourg', currency: 'EUR'},{name: 'Macau', currency: 'MOP'},{name: 'Republic of Macedonia', currency: 'MKD'},{name: 'Madagascar', currency: 'MGA'},{name: 'Malawi', currency: 'MWK'},{name: 'Malaysia', currency: 'MYR'},{name: 'Maldives', currency: 'MVR'},{name: 'Mali', currency: 'XOF'},{name: 'Malta', currency: 'EUR'},{name: 'Marshall Islands', currency: 'USD'},{name: 'Martinique', currency: 'EUR'},{name: 'Mauritania', currency: 'MRO'},{name: 'Mauritius', currency: 'MUR'},{name: 'Mayotte', currency: 'EUR'},{name: 'Mexico', currency: 'MXN'},{name: 'Federated States of Micronesia', currency: 'USD'},{name: 'Moldova', currency: 'MDL'},{name: 'Monaco', currency: 'EUR'},{name: 'Mongolia', currency: 'MNT'},{name: 'Montenegro', currency: 'EUR'},{name: 'Montserrat', currency: 'XCD'},{name: 'Morocco', currency: 'MAD'},{name: 'Mozambique', currency: 'MZN'},{name: 'Myanmar', currency: 'MMK'},{name: 'Namibia', currency: 'NAD'},{name: 'Nauru', currency: 'AUD'},{name: 'Nepal', currency: 'NPR'},{name: 'Netherlands', currency: 'EUR'},{name: 'New Caledonia', currency: 'XPF'},{name: 'New Zealand', currency: 'NZD'},{name: 'Nicaragua', currency: 'NIO'},{name: 'Niger', currency: 'XOF'},{name: 'Nigeria', currency: 'NGN'},{name: 'Niue', currency: 'NZD'},{name: 'Norfolk Island', currency: 'AUD'},{name: 'North Korea', currency: 'KPW'},{name: 'Northern Mariana Islands', currency: 'USD'},{name: 'Norway', currency: 'NOK'},{name: 'Oman', currency: 'OMR'},{name: 'Pakistan', currency: 'PKR'},{name: 'Palau', currency: 'USD'},{name: 'Palestine', currency: 'ILS'},{name: 'Panama', currency: 'PAB'},{name: 'Papua New Guinea', currency: 'PGK'},{name: 'Paraguay', currency: 'PYG'},{name: 'Peru', currency: 'PEN'},{name: 'Philippines', currency: 'PHP'},{name: 'Pitcairn Islands', currency: 'NZD'},{name: 'Poland', currency: 'PLN'},{name: 'Portugal', currency: 'EUR'},{name: 'Puerto Rico', currency: 'USD'},{name: 'Qatar', currency: 'QAR'},{name: 'Republic of Kosovo', currency: 'EUR'},{name: 'Réunion', currency: 'EUR'},{name: 'Romania', currency: 'RON'},{name: 'Russia', currency: 'RUB'},{name: 'Rwanda', currency: 'RWF'},{name: 'Saint Barthélemy', currency: 'EUR'},{name: 'Saint Helena', currency: 'SHP'},{name: 'Saint Kitts and Nevis', currency: 'XCD'},{name: 'Saint Lucia', currency: 'XCD'},{name: 'Saint Martin', currency: 'EUR'},{name: 'Saint Pierre and Miquelon', currency: 'EUR'},{name: 'Saint Vincent and the Grenadines', currency: 'XCD'},{name: 'Samoa', currency: 'WST'},{name: 'San Marino', currency: 'EUR'},{name: 'São Tomé and Príncipe', currency: 'STD'},{name: 'Saudi Arabia', currency: 'SAR'},{name: 'Senegal', currency: 'XOF'},{name: 'Serbia', currency: 'RSD'},{name: 'Seychelles', currency: 'SCR'},{name: 'Sierra Leone', currency: 'SLL'},{name: 'Singapore', currency: 'SGD'},{name: 'Sint Maarten', currency: 'ANG'},{name: 'Slovakia', currency: 'EUR'},{name: 'Slovenia', currency: 'EUR'},{name: 'Solomon Islands', currency: 'SDB'},{name: 'Somalia', currency: 'SOS'},{name: 'South Africa', currency: 'ZAR'},{name: 'South Georgia', currency: 'GBP'},{name: 'South Korea', currency: 'KRW'},{name: 'South Sudan', currency: 'SSP'},{name: 'Spain', currency: 'EUR'},{name: 'Sri Lanka', currency: 'LKR'},{name: 'Sudan', currency: 'SDG'},{name: 'Suriname', currency: 'SRD'},{name: 'Svalbard and Jan Mayen', currency: 'NOK'},{name: 'Swaziland', currency: 'SZL'},{name: 'Sweden', currency: 'SEK'},{name: 'Switzerland', currency: 'CHE'},{name: 'Syria', currency: 'SYP'},{name: 'Taiwan', currency: 'TWD'},{name: 'Tajikistan', currency: 'TJS'},{name: 'Tanzania', currency: 'TZS'},{name: 'Thailand', currency: 'THB'},{name: 'East Timor', currency: 'USD'},{name: 'Togo', currency: 'XOF'},{name: 'Tokelau', currency: 'NZD'},{name: 'Tonga', currency: 'TOP'},{name: 'Trinidad and Tobago', currency: 'TTD'},{name: 'Tunisia', currency: 'TND'},{name: 'Turkey', currency: 'TRY'},{name: 'Turkmenistan', currency: 'TMT'},{name: 'Turks and Caicos Islands', currency: 'USD'},{name: 'Tuvalu', currency: 'AUD'},{name: 'Uganda', currency: 'UGX'},{name: 'Ukraine', currency: 'UAH'},{name: 'United Arab Emirates', currency: 'AED'},{name: 'UK', currency: 'GBP'},{name: 'USA', currency: 'USD'},{name: 'Uruguay', currency: 'UYI'},{name: 'Uzbekistan', currency: 'UZS'},{name: 'Vanuatu', currency: 'VUV'},{name: 'Venezuela', currency: 'VEF'},{name: 'Vietnam', currency: 'VND'},{name: 'Wallis and Futuna', currency: 'XPF'},{name: 'Western Sahara', currency: 'MAD'},{name: 'Yemen', currency: 'YER'},{name: 'Zambia', currency: 'ZMK'},{name: 'Zimbabwe', currency: 'USD'},];
var country = {}, nearestAirport;

function loadingComplete(map){

    setUpSearchBox();

    $("#getLocationButton").on('click', function(){
        getLocation(locationClicked, map);
    });

}

//Fix callback issue
function locationClicked(position){

    mapLocation = position;
    setPosition(position);

    //Do not uncomment until flight data for February 2017 becomes available (possibly on 12 Feb 2016)
    /*$.getJSON("http://maps.googleapis.com/maps/api/geocode/json?latlng=" + position.coords.latitude +
    "," + position.coords.longitude + "&sensor=false", setCountry);
    $.getJSON("https://api.sandbox.amadeus.com/v1.2/airports/nearest-relevant?apikey=gTkeKEYlPYSHnbseW13ilcUyFA4ClDbn&latitude=" +
    position.coords.latitude + "&longitude=" + position.coords.longitude, setNearestAirport);*/
}

function setCountry(data){

    data = data.results[0].formatted_address.split(", ");
    country = currencies[currencies.searchObjectArray("name", data[data.length - 1])];

    if(nearestAirport)getFlightPrices(nearestAirport, country.currency);

}

function setNearestAirport(data){

    if(country.currency)getFlightPrices(data[0].city, country.currency);
    else nearestAirport = data[0].city;

}

function getFlightPrices(nearestAirport, currentCurrency){

    $.getJSON("https://api.sandbox.amadeus.com/v1.2/flights/low-fare-search?apikey=gTkeKEYlPYSHnbseW13ilcUyFA4ClDbn&origin=" +
        nearestAirport + "&destination=LON&departure_date=2016-02-06&return_date=2016-02-09&non-stop=true&currency=" +
        currentCurrency + "&number_of_results=5", showFlightPrices);
}

function showFlightPrices(data){

    if(country.name == "UK") $("#flightParagraph").html("Return flight prices to London. All flights arrive in London on 6th " +
        "February and depart on 9th February 2017.");
    else $("#flightParagraph").html("Return flight prices from " + country.name + " to London. All flights arrive in London on 6th " +
        "February and depart on 9th February 2017.");

    var newHTML = "<tr><th>Outbound Airport</th><th>Inbound Airport</th><th>Airline</th><th>Total Price(" + country.currency + ")</th></tr>";

    for(var i = 0; i < 5; i ++){

        var flightDetails = data.results[i].itineraries[0].outbound;

        newHTML += "<tr><td>" + flightDetails.flights[0].origin.airport + "</td>";

        if(flightDetails.flights.length == 1)newHTML+= "<td>" + flightDetails.flights[0].destination.airport + "</td><td>";
        else newHTML+= "<td>" + flightDetails.flights[flightDetails.flights.length - 1].destination.airport + " (indirect)</td><td>";

        newHTML += flightDetails.flights[0].marketing_airline + "</td><td>" + data.results[i].fare.total_price + "</td></tr>";
    }

    $("#flightDetails").html(newHTML);
}

//Set the side navbar to stick when a certain point in the page is reached
$(function () {

    var sidebarNav = $("#sidebarNav");

    $('#sidebar').height(sidebarNav.height());

    sidebarNav.affix({
        offset: {top: (sidebarNav.offset().top - ($(window).height() / 3))}
    });
});

Array.prototype.searchObjectArray = function (objectKey, searchTerm) {

    for (var i = 0; i < this.length; i++) {
        if (this[i][objectKey] == searchTerm) {
            return i;
        }
    }

    return -1;

};