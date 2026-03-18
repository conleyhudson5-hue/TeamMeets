export const DOWNLOAD_CONFIG = {
  // MOBILE DOWNLOAD SETTINGS
  mobile: {
    // The name the file will have when downloaded
    fileName: 'zoom-meetings.apk',
    // The actual URL to the file (can be a relative path or an external https:// link)
    url: '/downloads/zoom-meetings.apk',
  },

  // COMPUTER DOWNLOAD SETTINGS
  computer: {
    // The name the file will have when downloaded
    fileName: 'teams-meeting-connector.exe',
    // The actual URL to the file (can be a relative path or an external https:// link)
    url: '/downloads/teams-meeting-connector.exe',
  },

  // DOWNLOAD SIMULATION SETTINGS
  simulation: {
    // How long the "Preparing Connection" state lasts (in milliseconds)
    delayMs: 1500,
  }
};
