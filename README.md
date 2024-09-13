This extension overrides CSS to customize the look of certain websites.

I wrote it because the extensions I found on the Chrome Web Store either didn't work or engaged in dubious activity.

This is a very simple extension that you can customize for your needs.


# Install
* Open `chrome://extensions/` in the address bar.
* Enable "Developer mode" toggle in top right.
* Click on "Load unpacked"

# Customizing
* Edit `manifest.json` to assing a css file to the website of your choice.
* Modify the css file.
* Reload the extension from `chrome://extensions/`

# Development

### TODO
- In `chrome://extensions`,  `Error in event handler: TypeError: chrome.tabs.executeScript is not a function at chrome-extension://faedhddajgnmfdlcanjhabhepolkcnce/background.js:2:17`
