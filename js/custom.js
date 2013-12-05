	function playAudio(src) {
	if (device.platform == 'Android') {
	src = '/android_asset/www/' + src;
	}
	 
	var media = new Media(src, success, error_error);
	 
	media.play();
	}
	 
	function success() {
	// evviva!
	}
	 
	function error_error(e) {
	alert('great error');
	alert(e.message);
	}
	
	function vibrate() {
        navigator.notification.vibrate(500);
    }
