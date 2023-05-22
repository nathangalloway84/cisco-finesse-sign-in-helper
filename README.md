<!-- PROJECT LOGO -->
<br />
<div align="center">
<h3 align="center">Cisco Finesse Sign In Helper</h3>

  <p align="center">
    Agent Productivity Tool for Cisco Webex Contact Center Enterprise that speeds up the sign-in process.
    <br />
    <br />
    ·
    <a href="https://github.com/nathangalloway84/cisco-finesse-sign-in-helper/issues">Report Bug</a>
    ·
    <a href="https://github.com/nathangalloway84/cisco-finesse-sign-in-helper/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#downloading-from-chrome-web-store">Downloading from Chrome Web Store</a>
    </li>
    <li>
      <a href="#building-your-own">Building Your Own</a>
    </li>
    <li><a href="#running-the-example">Running the Example</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project
![Screenshot](https://github.com/nathangalloway84/cisco-finesse-sign-in-helper/blob/main/SCREENSHOT.png?raw=true "Screenshot")

<p>The Sign In Helper is a Google Chrome Extension that can be downloaded directly from the Chrome Web Store. It stores the agent phone information locally in storage, such that when an agent signs in to Webex Contact Center Enterprise through SSO, the information is auto-populated and automatically logs them in. If an agent needs to change their extension or mode, they can click on the Extension to update their information at any time.</p>
<p>You do not have to use the publically available package in the Chrome Web Store. You are free to take this extremely simple source code, customize it (or don't customize it) and publish your own extension to your Enterprise. If you are a premise CCE customer, this would be your best option because this extension only permits *.webexcce domains. You would minimally have to edit these within the manifest.json file to work with your own domains</p>

<!-- DOWNLOADING FROM CHROME WEB STORE -->
1. Go to the Chrome Web Store: https://chrome.google.com/webstore/category/extensions
2. Search the store for: Cisco Finesse Sign-In Helper
3. Add the extension to Chrome
4. Click the Extensions icon in Chrome and select the Sign In Helper
5. With the Web Page displayed, populate your device information and click save
6. Go to your Cisco Finesse URL and sign in via SSO (just as you normally would)

<!-- BUILDING YOUR OWN -->
## Building Your Own
To build your own follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```
* Cisco CCE environment (working Cisco Finesse)

### Installation

1. Download or Clone the repo
   ```sh
   git clone https://github.com/nathangalloway84/cisco-finesse-sign-in-helper.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Build the project. This will create the crm-connector folder
   ```sh
   npm run build
   ```

### Running It
1. Open Chrome and go to chrome://extensions
2. Click the Load unpacked button
3. Go the dist directory that was created when you executed npm run build and select it
4. The extension should be loaded. Click the Extensions icon in Chrome and select the Sign In Helper
5. With the Web Page displayed, populate your device information and click save
6. Go to your Cisco Finesse URL and sign in via SSO

Note: If you are not auto-signed in on the Cisco Finesse login page, check the following
- The domains listed in the manifest.json
- You have saved your phone settings correctly in the Extension Page

<!-- ROADMAP -->
## Roadmap

- [ ] No current roadmap items

See the [open issues](https://github.com/nathangalloway84/cisco-finesse-sign-in-helper/issues) for a full list of proposed features (and known issues).

<!-- CONTACT -->
## Contact

Nathan Galloway - g.nathan.galloway@gmail.com

Project Link: [https://github.com/nathangalloway84/cisco-finesse-sign-in-helper](https://github.com/nathangalloway84/cisco-finesse-sign-in-helper)
