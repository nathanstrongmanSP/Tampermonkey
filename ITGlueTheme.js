// ==UserScript==
// @name         ITGlue Theme
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Bring back the darkness!
// @author       Nathan Strongman (nathan.strongman@starport.ca)
// @match        starport.itglue.com/*
// @updateURL    https://raw.githubusercontent.com/nathanstrongmanSP/Tampermonkey/master/ITGlueTheme.js
// @downloadURL  https://raw.githubusercontent.com/nathanstrongmanSP/Tampermonkey/master/ITGlueTheme.js
// @run-at       document-start
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle ( `
    body.ui-theme-default:not(.myglue) .navbar-default.navbar-fixed-top {
        background: #222222;
    }
    body.ui-theme-default:not(.myglue) .navbar-default .navbar-nav > .active > a, body.ui-theme-default:not(.myglue) .navbar-default .navbar-nav > .active > a:hover, body.ui-theme-default:not(.myglue) .navbar-default .navbar-nav > .active > a:focus, body.ui-theme-default:not(.myglue) .navbar-default .navbar-nav > .open > a, body.ui-theme-default:not(.myglue) .navbar-default .navbar-nav > .open > a:hover, body.ui-theme-default:not(.myglue) .navbar-default .navbar-nav > .open > a:focus {
        background: #606060;
    }
    body.ui-theme-default:not(.myglue) .quick-search {
        background-color: #606060;
    }
    body.ui-theme-default:not(.myglue) .navbar-default .itglue-nav ul.recent-items > .dropdown, body.ui-theme-default:not(.myglue) .navbar-default .itglue-nav ul.user-menu > .dropdown {
        background: #606060;
    }
    body.ui-theme-default:not(.myglue) footer.navbar-default {
        background-color: #606060;
    }
` );
