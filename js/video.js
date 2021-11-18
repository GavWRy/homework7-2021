var video = document.querySelector("#player1")

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video")
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video")
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down")
	video.playbackRate *= 0.95
	console.log(video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
	video.playbackRate *= 1.05;
	console.log(video.playbackRate)
	
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	
	video.currentTime = video.currentTime + 15
	if (video.currentTime >= video.duration) {
		video.currentTime = 0
	}
	console.log(video.currentTime)
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == true){
		video.muted = false
		console.log("Unmute")
		document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
	}
	else {
		video.muted = true;
		document.querySelector("#volume").innerHTML = "0%"
		console.log("Mute")
	}
	
});

document.querySelector("#slider").addEventListener("click", function() {
	console.log("In Slider")
	console.log(this.value)

	document.querySelector("#volume").innerHTML = this.value + "%"
	video.volume = this.value / 100
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Styled");
	video.classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original");
	video.classList.remove("oldSchool")
});