chrome.webNavigation.onCompleted.addListener((details) => {
  console.log('Navigation completed to:', details.url);

  if (details.frameId === 0 && details.url.includes("open.spotify.com")) {
    chrome.storage.local.get('enabled', (data) => {
      if (data.enabled !== false) {  // Default to true if 'enabled' is not set
        chrome.scripting.executeScript({
          target: {tabId: details.tabId},
          files: ['content.js']
        });
      }
    });
  }
}, {url: [{urlMatches: 'https://open.spotify.com/.*'}]});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'openYouTube') {
    chrome.storage.local.get('songName', (data) => {
      if (data.songName) {
        let searchQuery = encodeURIComponent(data.songName);
        let youtubeUrl = `https://www.youtube.com/results?search_query=${searchQuery}`;
        chrome.tabs.update(sender.tab.id, {url: youtubeUrl}, (tab) => {
          chrome.webNavigation.onCompleted.addListener(function listener(details) {
            if (details.tabId === tab.id && details.url.includes('youtube.com/results')) {
              chrome.scripting.executeScript({
                target: {tabId: details.tabId},
                files: ['youtube.js']
              });
              chrome.webNavigation.onCompleted.removeListener(listener);
            }
          });
        });
      }
    });
  }
});
