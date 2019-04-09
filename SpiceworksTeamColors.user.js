// ==UserScript==
// @name         Spiceworks 2-Team Colors
// @namespace    http://tampermonkey.net/
// @version      2.1.0
// @description  Adds Team Colors
// @author       Nathan Strongman
// @match        help.starport.ca/tickets/*
// @match        help4.starport.ca/tickets/*
// @match        star-dc1-help1/tickets/*
// @match        sp-lab-help4
// @updateURL    https://raw.githubusercontent.com/det0nat3/tampermonkey/master/SpiceworksTeamColors.user.js
// @downloadURL  https://raw.githubusercontent.com/det0nat3/tampermonkey/master/SpiceworksTeamColors.user.js
// @run-at       document-end
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle ( `
    /*############## Custom additional CSS ##############*/
    .sui-opt-in .helpdesk-app .ticket-grid .table-body .ticket-table-wrapper tr.selected {
        color: #f9ff00;
        font-weight: bolder;
        border: 2px dashed #f9ff00;
    }

    /* Teams */
    .teamRed {
        color: #ffffff !important;
        background-color: #ff0000 !important;
    }
    .teamViolet {
        color: #ffffff !important;
        background-color: #ad00e6 !important;
    }
    .teamBlue {
        color: #ffffff !important;
        background: #0000ff !important;
    }
    .teamBlack {
        color: #ffffff !important;
        background: #000000 !important;
    }
    .rainbow {
        color: #000000 !important;
        background: linear-gradient(90deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3) !important;
    }
` );

function setColor() {
    console.log('Setting colors...');
    // Get all rows containing the team class name
    if (window.location.hostname == 'help4.starport.ca'| window.location.hostname == 'sp-lab-help4') {
        var ticket = document.getElementsByClassName("column-c_team");
    }
    else{
        ticket = document.getElementsByClassName("column-c_ticket_supervisor");
    }

    // Get number of rows
    var ticketsTotal = ticket.length;
    // Loop through the tickets, skip first result as it's the column header
    for (var i = 1; i < ticketsTotal; i++) {
        // Get team color
        var teamColor = ticket.item(i).innerText;
        // Team Rules
        if (teamColor) {
            ticket.item(i).parentElement.classList.remove("rainbow");
            ticket.item(i).parentElement.classList.add("team"+teamColor);
        }
        else{
            ticket.item(i).parentElement.classList.add("rainbow");
        }
    }
}

// We have to delay this because spiceworks is slow to load
setTimeout(function() {
    console.log('Checking for changes now...')
    // https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
    var targetNode = document.getElementById('ticket-grid');
    var config = { attributes: false, childList: true, subtree: true };
    var observer = new MutationObserver(setColor);
    observer.observe(targetNode, config);
    setColor();
},10000);