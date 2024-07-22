document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('toggle');
  const manualRedirectButton = document.getElementById('manualRedirect');

  // Load the saved state from storage
  chrome.storage.local.get('enabled', (data) => {
    toggle.checked = data.enabled !== false;  // Default to true if 'enabled' is not set
  });

  // Save the state to storage when the toggle is changed
  toggle.addEventListener('change', () => {
    chrome.storage.local.set({ enabled: toggle.checked });
  });

  // Add event listener to the manual redirect button
  manualRedirectButton.addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      let activeTab = tabs[0];
      if (activeTab.url.includes('open.spotify.com')) {
        chrome.scripting.executeScript({
          target: { tabId: activeTab.id },
          files: ['content.js']
        });
      }
    });
  });
});
