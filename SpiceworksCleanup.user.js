// ==UserScript==
// @name         Spiceworks Cleanup
// @namespace    http://tampermonkey.net/
// @version      1.1.1
// @description  Removes Ads and other junk
// @author       Nathan Strongman nathanstrongman@outlook.com
// @match        help.starport.ca/*
// @updateURL    https://raw.githubusercontent.com/det0nat3/tampermonkey/master/SpiceworksCleanup.user.js
// @downloadURL  https://raw.githubusercontent.com/det0nat3/tampermonkey/master/SpiceworksCleanup.user.js
// @run-at       document-end
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle ( `
    /* Sidebar & Ads  */
    #sidebar {
        display: none;
    }
    #content_wrapper {
        padding-right: 0px;
    }
    body.exlba #exlba {
        display: none;
    }
    /* Remove default padding on ticket box */
    #container{
        padding: 0;
    }

    /* Spiceworks Logo & top bar */
    header.site-navigation {
        display: none;
    }
` );
