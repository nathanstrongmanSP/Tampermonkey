// ==UserScript==
// @name         Datto Cloud Continuity Screenshot
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Allows you to get the full screenshot of the Datto CC agent
// @author       Nathan Strongman nathan.strongman@starport.ca
// @match        https://portal.dattobackup.com/status/cloud-continuity
// @icon         https://www.google.com/s2/favicons?sz=64&domain=dattobackup.com
// @updateURL    https://github.com/nathanstrongmanSP/Tampermonkey/raw/master/DattoCCScreenshot.user.js
// @downloadURL  https://github.com/nathanstrongmanSP/Tampermonkey/raw/master/DattoCCScreenshot.user.js
// @grant        none
// ==/UserScript==

const csrf = document.querySelector('#__csrf').value;
const menu = document.querySelector(`.status-filter-item-last`);
const input = document.createElement('input');
const alertDiv = document.querySelector('#js-page-alerts');

input.setAttribute('type', 'text');
input.setAttribute('style', 'width: 150px;');
input.setAttribute('placeholder', 'Agent ID');
input.setAttribute('class', 'form-control status-filter-item');
input.setAttribute('id', 'agentID');
menu.appendChild(input);

const btn = document.createElement('button');
btn.innerText = "Get Screenshot";
btn.setAttribute('class', 'btn btn-primary');
menu.appendChild(btn);

btn.addEventListener('click', (e) => {
    let agentCode = document.querySelector(`#agentID`).value.trim();
    if (typeof (Array.from(document.querySelectorAll('td')).find( e => e.innerText === agentCode)) == 'undefined' || agentCode == '') {
        alertDiv.innerText = `Unable to find agent with ID: ${agentCode}, Please make sure row is expanded for client with agent.`;
        alertDiv.setAttribute('class', 'page-alerts alert alert-danger');
        setTimeout(() => {
            alertDiv.innerText = '';
            alertDiv.setAttribute('class', 'page-alerts');
        }, 5000);
    } else {
        let agentID = Array.from(document.querySelectorAll('td')).find( e => e.innerText === agentCode).parentElement.dataset.agentId;
        getScreenshot(agentID);
    }
})

function getScreenshot(agentID)
{
    btn.innerText = "Please Wait...";
    //
    fetch("https://portal.dattobackup.com/ajax/status/direct-to-cloud/get-agents", {
    "credentials": "include",
    "headers": {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:98.0) Gecko/20100101 Firefox/98.0",
        "Accept": "*/*",
        "Accept-Language": "en-US,en;q=0.5",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "X-Requested-With": "XMLHttpRequest",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "Pragma": "no-cache",
        "Cache-Control": "no-cache"
    },
    "referrer": "https://portal.dattobackup.com/status/cloud-continuity",
    "body": `draw=2&columns%5B0%5D%5Bdata%5D=clientName&columns%5B0%5D%5Bname%5D=&columns%5B0%5D%5Bsearchable%5D=true&columns%5B0%5D%5Borderable%5D=true&columns%5B0%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B0%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B1%5D%5Bdata%5D=id&columns%5B1%5D%5Bname%5D=&columns%5B1%5D%5Bsearchable%5D=true&columns%5B1%5D%5Borderable%5D=false&columns%5B1%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B1%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B2%5D%5Bdata%5D=agentCount&columns%5B2%5D%5Bname%5D=&columns%5B2%5D%5Bsearchable%5D=true&columns%5B2%5D%5Borderable%5D=false&columns%5B2%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B2%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B3%5D%5Bdata%5D=lastSnapshot&columns%5B3%5D%5Bname%5D=&columns%5B3%5D%5Bsearchable%5D=true&columns%5B3%5D%5Borderable%5D=false&columns%5B3%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B3%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B4%5D%5Bdata%5D=lastScreenshot&columns%5B4%5D%5Bname%5D=&columns%5B4%5D%5Bsearchable%5D=true&columns%5B4%5D%5Borderable%5D=false&columns%5B4%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B4%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B5%5D%5Bdata%5D=backupHistory&columns%5B5%5D%5Bname%5D=&columns%5B5%5D%5Bsearchable%5D=true&columns%5B5%5D%5Borderable%5D=false&columns%5B5%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B5%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B6%5D%5Bdata%5D=6&columns%5B6%5D%5Bname%5D=&columns%5B6%5D%5Bsearchable%5D=true&columns%5B6%5D%5Borderable%5D=false&columns%5B6%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B6%5D%5Bsearch%5D%5Bregex%5D=false&order%5B0%5D%5Bcolumn%5D=0&order%5B0%5D%5Bdir%5D=asc&start=0&length=20&search%5Bvalue%5D=&search%5Bregex%5D=false&__csrf=${csrf}`,
    "method": "POST",
    "mode": "cors"
    })
    .then((resp) => resp.json())
    .then((resp) => {
        const agentList = resp.data;
        agentList.forEach((client) => {
            client.agents.forEach((agent) => {
                if (agent.id === agentID) {
                    fetch(`https://portal.dattobackup.com/ajax/last-screenshot-url/${agent.cloudDeviceId}/${agent.id}`)
                    .then((res) => res.json())
                    .then((data) => {
                        document.querySelector('#agentID').value = '';
                        btn.innerText = "Get Screenshot";
                        let screenshotLink = data.url;
                        window.open(screenshotLink);
                    })
                }
            })
        })
    })
}
