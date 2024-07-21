function clickFirstYouTubeResult() {
    console.log('Checking for the first video result...');
    const firstResult = document.querySelector('ytd-video-renderer a#thumbnail');
    if (firstResult) {
      console.log('First video found, clicking it now.');
      firstResult.click();
    } else {
      console.log('First video not found, retrying in 500ms...');
      setTimeout(clickFirstYouTubeResult, 500);
    }
  }
  
  // Start checking for the first video link
  clickFirstYouTubeResult();
  