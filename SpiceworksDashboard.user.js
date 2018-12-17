// ==UserScript==
// @name         Spiceworks Dashboard
// @namespace    http://tampermonkey.net/
// @version      1.2.1
// @description  Starport Spiceworks dashboard
// @author       Nathan Strongman nathanstrongman@outlook.com
// @match        help.starport.ca/*
// @match        http://star-dc1-help1/*
// @match        help4.starport.ca/*
// @updateURL    https://raw.githubusercontent.com/det0nat3/tampermonkey/master/SpiceworksDashboard.user.js
// @downloadURL  https://raw.githubusercontent.com/det0nat3/tampermonkey/master/SpiceworksDashboard.user.js
// @run-at       document-end
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle ( `
    /* "New Ticket" & "Refresh Ticket" buttons */
    .sui-bttn-toolbar{
        display: none;
    }
    /* Search Box */
    .page-search {
        display: none;
    }
    /* Ticket Table  */
    .ticket-table-wrapper {
        height: 600px;
    }
    /* Bottom ticket Pane */
    .sui-opt-in .helpdesk-app .ticket-pane {
        display: none;
    }
    /* Table scroll bars */
    .sui-opt-in .helpdesk-app .ticket-grid .table-body .ticket-table-wrapper {
        overflow: hidden;
    }
` );
