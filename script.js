window.onload = function() {
    var videoElement = document.getElementById('video-background');
    var isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

    window.onload = function() {
        var videoElement = document.getElementById('video-background');
        var isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    
        if (isiOS) {
            videoElement.src = document.getElementById('ios-video').src;
        } else {
            videoElement.src = document.getElementById('android-video').src;
        }
    };
    
};