// ==UserScript==
// @name         Spiceworks Team Colors
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Adds Team Colors
// @author       Nathan Strongman nathanstrongman@outlook.com
// @match        help.starport.ca/*
// @updateURL    https://raw.githubusercontent.com/det0nat3/tampermonkey/master/SpiceworksTeamColors.user.js
// @downloadURL  https://raw.githubusercontent.com/det0nat3/tampermonkey/master/SpiceworksTeamColors.user.js
// @run-at       document-end
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle ( `
    /* Team column */
    .column-c_ticket_supervisor {
        text-align: center;
        font-weight: bolder;
    }

    /*############## Custom additional CSS ##############*/

    /* Teams */
    .teamRed {
        color: #FFFFFF;
        background-color:rgba(255, 0, 0, 1);
        border: 0.5px solid #000000;
    }
    .teamRedRow {
        background-color:rgba(255, 0, 0, 0.3);
    }
    .teamViolet {
        color: #FFFFFF;
        background-color: rgba(157, 0, 255,1);
        border: 0.5px solid #000000;
    }
    .teamVioletRow {
        background-color: rgba(157, 0, 255,0.3);
    }
    .teamBlue {
        color: #FFFFFF;
        background: rgba(0, 0, 255,1);
        border: 0.5px solid #000000;
    }
    .teamBlueRow {
        background: rgba(0, 0, 255,0.3);
    }
    .teamBlack {
        color: #FFFFFF;
        background: rgba(0, 0, 0,1);
        border: 0.5px solid #000000;
    }
    .teamBlackRow {
        background: rgba(0, 0, 0,0.3);
    }
    .rainbow {
        background: linear-gradient(90deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3);
        background-size: 200% 200%;
        animation: rainbow 10s ease infinite;
    }
    .rainbowRow {
        background: linear-gradient(90deg, rgba(255, 36, 0,0.3), rgba(232, 29, 29,0.3), rgba(232, 183, 29,0.3), rgba(227, 232, 29,0.3), rgba(29, 232, 64,0.3), rgba(29, 221, 232,0.3), rgba(43, 29, 232,0.3), rgba(221, 0, 243,0.3), rgba(221, 0, 243,0.3));
    }

    /* Animations */
    @keyframes rainbow {
        0%{background-position:0% 82%}
        50%{background-position:100% 19%}
        100%{background-position:0% 82%}
    }

    .blink {
        animation: blink 3s ease-out infinite;
    }
    @keyframes blink {
        50% {
            opacity: 0.2;
        }
    }
` );

function setColor() {
    console.log('Setting colors...');
    // Get all rows containing the team class name
    var ticket = document.getElementsByClassName("column-c_ticket_supervisor");
    var ticketsTotal = ticket.length;

    // Loop through the tickets
    for (var i = 1; i < ticketsTotal; i++) {
        // Get team color
        var teamColor = ticket.item(i).innerText;

        // Team Rules
        if (teamColor) {
            ticket.item(i).classList.remove("rainbow");
            ticket.item(i).parentElement.classList.remove("rainbowRow");

            ticket.item(i).classList.add("team"+teamColor);
            ticket.item(i).parentElement.classList.add("team"+teamColor+"Row");
            ticket.item(i).classList.add("blink");
        }
        else{
            ticket.item(i).classList.add("rainbow");
            ticket.item(i).parentElement.classList.add("rainbowRow");
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
},10000);
