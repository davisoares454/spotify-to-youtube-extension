document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('toggle');
  
    // Load the saved state from storage
    chrome.storage.local.get('enabled', (data) => {
      toggle.checked = data.enabled !== false;  // Default to true if 'enabled' is not set
    });
  
    // Save the state to storage when the toggle is changed
    toggle.addEventListener('change', () => {
      chrome.storage.local.set({enabled: toggle.checked});
    });
  });
  