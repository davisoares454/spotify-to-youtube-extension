function extractSongAndArtist() {
  // Extract the song name
  let songName = document.querySelector('h1')?.textContent;

  // Extract the artist name(s)
  let artistElements = document.querySelectorAll('a[draggable="false"][data-testid="creator-link"]');
  let artists = Array.from(artistElements).map(element => element.textContent.trim());

  return {
    songName: songName ? songName.trim() : null,
    artists: artists.length > 0 ? artists.join(', ') : null
  };
}

let { songName, artists } = extractSongAndArtist();

if (songName && artists) {
  chrome.storage.local.set({ songName: songName, artists: artists }, () => {
    chrome.runtime.sendMessage({ action: 'openYouTube' });
  });
}
