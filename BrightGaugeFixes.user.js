// ==UserScript==
// @name         BrightGauge Fixes
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  Add missing features that should be there...
// @author       Nathan Strongman nathan.strongman@starport.ca
// @match        https://sp.brightgauge.co/public/dashboards/*
// @match        https://*.brightgauge.co/dashboards/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=brightgauge.co
// @updateURL    https://github.com/nathanstrongmanSP/Tampermonkey/raw/master/BrightGaugeFixes.user.js
// @downloadURL  https://github.com/nathanstrongmanSP/Tampermonkey/raw/master/BrightGaugeFixes.user.js
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle('.dashboards .container-fluid { overflow-y: hidden !important; }');

(function() {
    'use strict';
})();
