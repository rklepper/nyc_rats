'use strict'

console.log('Loaded map.js')

mapboxgl.accessToken = 'pk.eyJ1IjoicmtsZXBwZXIiLCJhIjoiY2s3Z2ZsYmdhMGQ2ZTNmb2RjbDBuanB4diJ9.sSYh3Y87xtJWWc4xSzyBZA'

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/rklepper/ck7um1oue57821itje0cwzd1v,
    center: [-73.96216,40.80779],
    zoom: 16
})

let navigation = new mapboxgl.NavigationControl({
    showCompass: false
})
map.addControl(navigation, 'top-left')

let scale = new mapboxgl.ScaleControl({
    maxWidth: 80,
    unit: 'imperial'
})
map.addControl(scale, 'bottom-right')

let geolocate = new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true,
    showUserLocation: true,
    fitBoundsOptions: {
    }
})
map.addControl(geolocate, 'top-left')

geolocate.on('geolocate', function(event) {

})
