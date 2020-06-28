function toggleMute(){



	var self = this.element;
	self.muteToggleButton = element.querySelector('.mute-toggle');

	// Enable mute toggle button
	self.muteToggleButton.addEventListener('click', function() { self.toggleMute() });






	/**
	 * Toggles video mute/unmute.
	 */
	VideoPlayer.prototype.toggleMute = function() {
	  this.video.muted = !this.video.muted;
	};


};