let map, heatMap, socialHeatMap;
let addedMarkers = [];
const center = {lat: 51.9173738, lng: 4.4845588};

// Called by Google Maps API.
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: center,
    zoom: 13,
    disableDefaultUI: true,
    gestureHandling: 'none',
    zoomControl: false,
    styles: [
      {
        "elementType": "geometry",
        "stylers": [{"color": "#f5f5f5"}]
      },
      {
        "elementType": "labels.icon",
        "stylers": [{"visibility": "off"}]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [{"color": "#616161"}]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [{"color": "#f5f5f5"}]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [{"color": "#bdbdbd"}]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [{"color": "#eeeeee"}]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [{"color": "#757575"}]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [{"color": "#e5e5e5"}]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [{"color": "#9e9e9e"}]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [{"color": "#ffffff"}]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [{"color": "#757575"}]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [{"color": "#dadada"}]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [{"color": "#616161"}]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [{"color": "#9e9e9e"}]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [{"color": "#e5e5e5"}]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [{"color": "#eeeeee"}]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{"color": "#c9c9c9"}]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [{"color": "#9e9e9e"}]
      }
    ]
  });

  heatMap = new google.maps.visualization.HeatmapLayer({
    data: formatPoints(points),
    map: map,
    opacity: 0.5
  });

  socialHeatMap = new google.maps.visualization.HeatmapLayer({
    data: formatPoints(socialPoints),
    map: map,
    opacity: 0.5
  });

  heatMap.set('radius', 20);
  socialHeatMap.set('radius', 20);

  document.getElementById('heatMapToggle').classList.toggle('active');
  document.getElementById('socialHeatMapToggle').classList.toggle('active');
  document.getElementById('markersToggle').classList.toggle('active');

  addMarkers();
  toggleSocialHeatmap();
  toggleMarkers();

  changeGradient();
}

function formatPoints(p) {
  let heatMapPoints = [];
  p.forEach(point => {
    heatMapPoints.push(new google.maps.LatLng({lat: point[1], lng: point[0]}));
  });

  return heatMapPoints;
}

function addMarkers() {
  mentionPoints.forEach(marker => {
    let m = new google.maps.Marker({
      position: {lat: marker.location[1], lng: marker.location[0]},
      map: map,
      customInfo: marker.data,
    });

    // Show the maker info in the sidebar.
    m.addListener('click', function() {
      const info = this.customInfo;
      const sidebar = document.getElementById('sidebar');
      sidebar.innerHTML = `
        <h1>${info.title}</h1>
        <h3>${info.time}</h3>
        <br><br>
        <p>${info.description}</p>
      `;
    });

    addedMarkers.push(m);
  })
}

function toggleMarkers() {
  addedMarkers.forEach(marker => {
    marker.setVisible(!marker.getVisible());
  });
  document.getElementById('markersToggle').classList.toggle('active');
}

function toggleHeatmap() {
  heatMap.setMap(heatMap.getMap() ? null : map);
  document.getElementById('heatMapToggle').classList.toggle('active');
}

function toggleSocialHeatmap() {
  socialHeatMap.setMap(socialHeatMap.getMap() ? null : map);
  document.getElementById('socialHeatMapToggle').classList.toggle('active');
}

function changeGradient() {
  const gradient = [
    "rgba(12, 2, 255, 0)",
    "rgba(0, 244, 255, 1)",
    "rgba(0, 156, 255, 1)",
    "rgba(0, 75, 255, 1)",
    "rgba(12, 2, 255, 1)",
    "rgba(12, 2, 255, 1)",
    "rgba(102, 44, 249, 1)",
    "rgba(155, 58, 249, 1)",
    "rgba(205, 0, 255, 1)",
    "rgba(255, 133, 225, 1)"
  ];
  socialHeatMap.set('gradient', socialHeatMap.get('gradient') ? null : gradient);
}
