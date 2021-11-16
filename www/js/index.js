
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');


};















//preloader

const preload = document.querySelector('.preloader');

window.addEventListener('load', function(){
    preload.classList.add('remove');
});