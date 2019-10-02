// ==UserScript==
// @name         Spiceworks Dark-Mode
// @namespace    http://tampermonkey.net/
// @version      1.1.1
// @description  Starport Spiceworks darkmode
// @author       Nathan Strongman (nathan.strongman@starport.ca)
// @match        help.starport.ca/tickets/*
// @match        help4.starport.ca/tickets/*
// @match        star-dc1-help1/tickets/*
// @match        sp-lab-help4/tickets/*
// @updateURL    https://raw.githubusercontent.com/nathanstrongmanSP/Tampermonkey/master/SpiceworksDarkMode.user.js
// @downloadURL  https://raw.githubusercontent.com/nathanstrongmanSP/Tampermonkey/master/SpiceworksDarkMode.user.js
// @run-at       document-end
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle ( `
    /* Dark Mode */
    html {
        background: #232323 !important;
        scrollbar-color: #979797 #303030 !important;
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
    .domestic-nav {
        border-bottom: 1px solid #0d0d0d !important;
        background-color: #202020 !important;
    }
    .domestic-apps-menu::after {
        border-right: none !important;
    }
    .secondary-menus .domestic-menus_entry {
        background-color: #202020 !important;
    }
    .secondary-menus .domestic-menus_entry + .domestic-menus_entry::before {
        border-left: none !important;
    }
    .page-header h1{
        color: #979797 !important;
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
        color: #979797 !important;
        font-weight: bold !important;
    }

    /* Fonts */
    .sui-opt-in h1, .sui-opt-in h2, .sui-opt-in h3, .sui-opt-in h4, .sui-opt-in h5, .sui-opt-in h6 {
        color: ##e8e8e8;;
    }

    /* Ticket Pane */
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

    /* Search */
    a.sui-bttn {
        background-color: background-color: #202020 !important;
        background-image: -moz-linear-gradient(top, #C1C1C1, #7b7b7b) !important;
        background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#C1C1C1), to(#7b7b7b)) !important;
        background-image: -webkit-linear-gradient(top, #C1C1C1, #7b7b7b) !important;
        background-image: -o-linear-gradient(top, #C1C1C1, #7b7b7b) !important;
        background-image: linear-gradient(to bottom, #C1C1C1, #7b7b7b) !important;
    }
    .sui-opt-in .sui-search-field, .sui-opt-in .sui-search-field.text {
        background: #202020 !important;
        border: #979797 solid 1px !important;
    }
    .sui-opt-in .sui-search-bttn, .sui-opt-in a.sui-search-bttn {
        background-color: background-color: #202020 !important;
        background-image: -moz-linear-gradient(top, #C1C1C1, #7b7b7b) !important;
        background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#C1C1C1), to(#7b7b7b)) !important;
        background-image: -webkit-linear-gradient(top, #C1C1C1, #7b7b7b) !important;
        background-image: -o-linear-gradient(top, #C1C1C1, #7b7b7b) !important;
        background-image: linear-gradient(to bottom, #C1C1C1, #7b7b7b) !important;
        border: #979797 solid 1px !important;
    }

    /* Ticket Details*/
    .sui-opt-in .helpdesk-app .ticket-pane .tab-sections .tab-pane.activity .actions li.active {
        color: #C1C1C1 !important;
    }

    /* Teams */
    .teamRed {
        color: #C1C1C1 !important;
        background-color: #9e0000 !important;
    }
    .teamViolet {
        color: #C1C1C1 !important;
        background-color: #610081 !important;
    }
    .teamBlue {
        color: #C1C1C1 !important;
        background: #000064 !important;
    }
    .teamBlack {
        color: #C1C1C1 !important;
        background: #000000 !important;
    }
` );