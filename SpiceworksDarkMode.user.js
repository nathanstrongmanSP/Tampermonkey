// ==UserScript==
// @name         Spiceworks Dark-Mode
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  Starport Spiceworks darkmode
// @author       Nathan Strongman (nathan.strongman@starport.ca)
// @match        help.starport.ca/tickets/*
// @match        star-dc1-help1/tickets/*
// @updateURL    https://raw.githubusercontent.com/nathanstrongmanSP/Tampermonkey/master/SpiceworksDarkMode.user.js
// @downloadURL  https://raw.githubusercontent.com/nathanstrongmanSP/Tampermonkey/master/SpiceworksDarkMode.user.js
// @run-at       document-end
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle ( `
    /* Dark Mode */
    html {
        background: #232323 !important;
    }
    .sui-body {
        background-color: #232323 !important;
    }
    .sui-opt-in {
        color: #979797 !important;
    }
    .helpdesk-app {
        border: none !important;
    }
    .page-header h1{
        color: #FFFFFF !important;
    }
    .table-header {
        background: #232323 !important;
    }
    .table-footer{
        background: #232323 !important;
    }
    .helpdesk-app {
        border: none !important;
    }
    tr {
        border-left: none !important;
    }
    .ticket-table-wrapper {
        background-color: #232323 !important;
    }
    .ticket-list {
        color: #FFFFFF !important;
        font-weight: bold !important;
    }
    .sui-opt-in .helpdesk-app .ticket-pane .ticket-pane-content {
        background: #202020 !important;
    }
    .sui-opt-in .helpdesk-app .ticket-pane .show-more-item .bottom-mask {
        background-image: -moz-linear-gradient(top, rgba(255, 255, 255, 0), #202020) !important;
        background-image: -webkit-gradient(linear, 0 0, 0 100%, from(rgba(255, 255, 255, 0)), to(#202020)) !important;
        background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0), #202020) !important;
        background-image: -o-linear-gradient(top, rgba(255, 255, 255, 0), #202020) !important;
        background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), #202020) !important;
    }
` );