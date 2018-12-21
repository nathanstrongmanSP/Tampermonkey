// ==UserScript==
// @name         Spiceworks 2-Team Colors
// @namespace    http://tampermonkey.net/
// @version      2.0.6
// @description  Adds Team Colors
// @author       Nathan Strongman nathanstrongman@outlook.com
// @match        help.starport.ca/tickets/*
// @match        star-dc1-help1/tickets/*
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
        color: #FFFFFF !important;
        background-color:rgba(255, 0, 0, 1) !important;
    }
    .teamViolet {
        color: #FFFFFF !important;
        background-color: rgba(180, 0, 255,1) !important;
    }
    .teamBlue {
        color: #FFFFFF !important;
        background: rgba(0, 0, 255,1) !important;
    }
    .teamBlack {
        color: #FFFFFF !important;
        background: rgba(0, 0, 0,1) !important;
    }
    .rainbow {
        color: #000000 !important;
        background: linear-gradient(90deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3) !important;
    }
` );

function setColor() {
    console.log('Setting colors...');
    // Get all rows containing the team class name
    var ticket = document.getElementsByClassName("column-c_ticket_supervisor");

    // Get number of rows
    var ticketsTotal = ticket.length;

    // Loop through the tickets, skip first result as it's the column header
    for (var i = 1; i < ticketsTotal; i++) {
        // Get team color
        var teamColor = ticket.item(i).innerText;

        // Team Rules
        if (teamColor) {
            // ticket.item(i).classList.remove("rainbow"); //Broken
            ticket.item(i).parentElement.classList.remove("rainbow");

            // ticket.item(i).classList.add("team"+teamColor); //Broken
            ticket.item(i).parentElement.classList.add("team"+teamColor);
            // ticket.item(i).classList.add("blink");
        }
        else{
            // ticket.item(i).classList.add("rainbow");
            ticket.item(i).parentElement.classList.add("rainbow");
        }
    }
}

// We have to delay this because spiceworks is slow
setTimeout(function() {
    console.log('Checking for changes now...')
    // https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
    var targetNode = document.getElementById('ticket-grid');
    var config = { attributes: false, childList: true, subtree: true };
    var observer = new MutationObserver(setColor);
    observer.observe(targetNode, config);
    setColor();
},10000);
