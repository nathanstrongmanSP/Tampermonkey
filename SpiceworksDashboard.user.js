// ==UserScript==
// @name         Spiceworks 3-Dashboard
// @namespace    http://tampermonkey.net/
// @version      2.5.1
// @description  Starport Spiceworks dashboard
// @author       Nathan Strongman nathanstrongman@outlook.com
// @match        help.starport.ca/tickets/*
// @match        star-dc1-help1/tickets/*
// @updateURL    https://raw.githubusercontent.com/det0nat3/tampermonkey/master/SpiceworksDashboard.user.js
// @downloadURL  https://raw.githubusercontent.com/det0nat3/tampermonkey/master/SpiceworksDashboard.user.js
// @run-at       document-end
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle ( `
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
        height: 200px !important;
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
