// ==UserScript==
// @name         Spiceworks 3-Dashboard
// @namespace    http://tampermonkey.net/
// @version      2.8.2
// @description  Starport Spiceworks dashboard
// @author       Nathan Strongman (nathan.strongman@starport.ca)
// @match        help.starport.ca/tickets/*
// @match        star-dc1-help1/tickets/*
// @updateURL    https://raw.githubusercontent.com/nathanstrongmanSP/Tampermonkey/master/SpiceworksDashboard.user.js
// @downloadURL  https://raw.githubusercontent.com/nathanstrongmanSP/Tampermonkey/master/SpiceworksDashboard.user.js
// @run-at       document-end
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle ( `
    body {
        overflow: hidden !important;
        height: 1201px;
    }
    .sui-body-shadow {
        -moz-box-shadow: none !important;
        -webkit-box-shadow: none !important;
        box-shadow: none !important;
    }
    /* Top nav bar */
    .domestic-nav.affix-top {
        display: none !important;
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
var h1HTML = h1[0].innerHTML.replace("Tickets <","Public Helpdesk <");
h1[0].innerHTML = h1HTML;

// Only make noise 9-9 Mon-Fri
function activeHours()
{
    var today = new Date();
    var hour = today.getHours();
    var day = today.getDay();
    if (hour > 8 && hour < 21 && day != 0 && day != 9)
    {
        return true;
    } else {
        return false;
    }

}
// Timer for noise loop
var minutes = 5;
var timer = minutes * 60000;

setInterval(function(){
    if (activeHours())
    {
        console.log('Making some noise if tickets exist...')
        var ticket = document.getElementsByClassName("column-id");
        if (ticket.length > 1) {
            // var audio = new Audio('https://notificationsounds.com/message-tones/to-the-point-568/download/mp3');
            var audio = new Audio('https://www.myinstants.com/media/sounds/tindeck_1.mp3');
        audio.play();
        }
    }
}, timer);