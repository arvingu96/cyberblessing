// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('myVideo');
  
    // Method 1: Using the 'loop' attribute
    // Uncomment the line below if you prefer using the loop attribute
    video.loop = true;
  
    // Optional: Start playing the video automatically
    video.play();
  });
  