function initMap() {
    var myCenter = { lat: 50.464803, lng: 30.515744 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 19,
        center: {lat: 50.464803, lng: 30.515744}

    });
    var marker = new google.maps.Marker({
        position: myCenter,
        map: map
    });
}