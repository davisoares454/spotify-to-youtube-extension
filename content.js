function extractSongName() {
    let songName = document.querySelector('h1')?.textContent; // Adjust this selector based on Spotify's actual structure.
    return songName ? songName.trim() : null;
  }
  
  let songName = extractSongName();
  
  if (songName) {
    chrome.storage.local.set({songName: songName}, () => {
      chrome.runtime.sendMessage({action: 'openYouTube'});
    });
  }
  