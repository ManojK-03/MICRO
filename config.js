
/* =========================================
   LEARN FORGE — SITE CONFIGURATION
========================================= */

window.SITE_CONFIG = {
  siteName: "Learn Forge",
  collegeName: "Your College Name",
  location: "Your City",

  capacity: 40,

  // Paste your deployed Google Apps Script URL.
  apiUrl: "https://script.google.com/macros/s/AKfycbwGPhWxjiMdMxKrcmGwJRFOwrLTKUyOOUO6jEreEyLl01TCVjk7ydz0hbZngu_X9B74/exec",

  // Used only when the backend is unavailable.
  manualRegistered: null,

  contactEmail: "abc@gmail.com",

  links: {
    form: "https://forms.gle/REPLACE-WITH-YOUR-FORM-ID",

    community:
      "https://chat.whatsapp.com/REPLACE-WITH-YOUR-INVITE",

    linkedin:
      "https://www.linkedin.com/company/REPLACE-WITH-YOUR-PAGE",

    github:
      "https://github.com/REPLACE-WITH-YOUR-ORG",

    microsoft:
      "https://learn.microsoft.com/en-us/training/",

    gsoc:
      "https://summerofcode.withgoogle.com/"
  },

  features: {
    liveCounter: true,
    registration: true,
    emailValidation: true,
    animations: true
  }
};
