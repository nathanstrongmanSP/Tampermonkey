// ==UserScript==
// @name         Spiceworks 1-Cleanup
// @namespace    http://tampermonkey.net/
// @version      2.6
// @description  Removes Ads and other junk
// @author       Nathan Strongman (nathan.strongman@starport.ca)
// @match        help.starport.ca/tickets/*
// @match        help4.starport.ca/tickets/*
// @match        help.cyber724.com/tickets/*
// @match        star-dc1-help1/tickets/*
// @match        sp-lab-help4/tickets/*
// @updateURL    https://github.com/nathanstrongmanSP/Tampermonkey/raw/master/SpiceworksCleanup.user.js
// @downloadURL  https://github.com/nathanstrongmanSP/Tampermonkey/raw/master/SpiceworksCleanup.user.js
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
