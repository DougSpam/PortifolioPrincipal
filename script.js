window.onload = function() {
    var videoElement = document.getElementById('video-background');
    var isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

    if (isiOS) {
        videoElement.parentNode.removeChild(videoElement);
    } else {
    }
};