// ==UserScript==
// @name         Spiceworks 4-InternalDashboard
// @namespace    http://tampermonkey.net/
// @version      1.0.4
// @description  Starport Spiceworks internal dashboard
// @author       Nathan Strongman (nathan.strongman@starport.ca)
// @match        help4.starport.ca/tickets/*
// @match        sp-lab-help4/tickets/*
// @updateURL    https://raw.githubusercontent.com/nathanstrongmanSP/Tampermonkey/master/SpiceworksInternalDashboard.user.js
// @downloadURL  https://raw.githubusercontent.com/nathanstrongmanSP/Tampermonkey/master/SpiceworksInternalDashboard.user.js
// @run-at       document-end
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle ( `
    body {
        overflow: hidden !important;
    }
    /* "New Ticket" & "Refresh Ticket" buttons */
    .sui-bttn-toolbar{
        display: none !important;
    }
    /* Search Box */
    .page-search {
        display: none !important;
    }
    /* Ticket Table  */
    .ticket-table-wrapper {
        height: 1000px !important;
        overflow: hidden !important;
    }
    #content {
        min-height: 100px !important;
    }
    /* Bottom ticket Pane */
    .ticket-pane {
        display: none !important;
    }
    /* Table scroll bars */
    .ticket-table-wrapper {
        overflow: hidden !important;
    }
    /* Footer */
    .table-footer {
        display: none !important;
    }
    #footer {
        display: none !important;
    }
    .selected {
        border: none !important;
        color: #FFFFFF !important;
    }

    /* Dark Mode */
    html {
        background: #232323 !important;
        cursor: none !important;
    }
    .sui-body {
        background-color: #232323 !important;
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
` );

var header = document.getElementsByClassName('page-header');
var h1 = header[0].getElementsByTagName("h1");
var h1HTML = h1[0].innerHTML.replace("Tickets <","<");
h1[0].innerHTML = h1HTML;
