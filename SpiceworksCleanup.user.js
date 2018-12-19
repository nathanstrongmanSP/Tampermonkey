// ==UserScript==
// @name         Spiceworks 1-Cleanup
// @namespace    http://tampermonkey.net/
// @version      2.2
// @description  Removes Ads and other junk
// @author       Nathan Strongman nathanstrongman@outlook.com
// @match        help.starport.ca/tickets/*
// @match        star-dc1-help1/tickets/*
// @match        help4.starport.ca/tickets/*
// @match        help.cyber724.com/tickets/*
// @updateURL    https://raw.githubusercontent.com/det0nat3/tampermonkey/master/SpiceworksCleanup.user.js
// @downloadURL  https://raw.githubusercontent.com/det0nat3/tampermonkey/master/SpiceworksCleanup.user.js
// @run-at       document-start
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle ( `
    /* Sidebar & Ads  */
    #sidebar {
        display: none !important;
    }
    #content_wrapper {
        padding-right: 0px !important;
    }
    #exlba {
        display: none !important;
    }
    /* Remove default padding on ticket box */
    #container{
        padding: 0 !important;
    }

    /* Spiceworks Logo & top bar */
    .site-navigation {
        display: none !important;
    }
` );
