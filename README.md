# Spotify to YouTube Chrome Extension

This Chrome extension automatically redirects Spotify track URLs to YouTube, searching for and opening the first video result based on the track's name. It includes a toggle switch that allows you to enable or disable this automatic redirection feature.

## Features

- **Automatic Redirection**: When you open a Spotify track URL, the extension will automatically redirect to YouTube and open the first video result for that track.
- **Toggle Switch**: Enable or disable the automatic redirection with a toggle switch.
- **Customizable Icons**: The switch uses custom icons to represent the Spotify and YouTube services.

## Installation

1. **Clone the Repository** and navigate to the extension directory.

2. **Load the Extension in Chrome**:
   - Open Chrome and go to `chrome://extensions`.
   - Enable "Developer mode" (toggle switch in the top right).
   - Click "Load unpacked" and select the extension directory.

## Usage

1. **Enable/Disable Automatic Redirection**:
   - Click on the extension icon in the Chrome toolbar.
   - Use the toggle switch to enable or disable the automatic redirection feature.

2. **Automatic Redirection**:
   - When enabled, the extension will automatically redirect any Spotify track URL to YouTube and open the first video result.

## Development

To make changes or contribute to the extension:

1. **Modify the Files**:
   - **`background.js`**: Contains the background script for handling URL redirection.
   - **`popup.html`**: Contains the HTML for the extension popup.
   - **`popup.js`**: Contains the JavaScript for handling user interactions in the popup.
   - **`icons/`**: Contains the icons used in the extension.

2. **Reload the Extension**:
   - After making changes, go to `chrome://extensions` and click the reload icon next to your extension.

## Customization

- **Icons**: Replace `icons/spotify.png` and `icons/youtube.png` with your custom icons.
- **Popup Styling**: Modify `popup.html` and the embedded CSS to change the appearance of the popup and toggle switch.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- **[Chrome Extensions Documentation](https://developer.chrome.com/docs/extensions/mv3/)**: For detailed information on building Chrome extensions.
- **[Spotify Web API](https://developer.spotify.com/documentation/web-api/)**: For the Spotify API documentation.
- **[YouTube Data API](https://developers.google.com/youtube/v3)**: For the YouTube API documentation.

---

For any issues or contributions, please feel free to open an issue or submit a pull request on the [GitHub repository](https://github.com/davisoares454/spotify-to-youtube-extension).
