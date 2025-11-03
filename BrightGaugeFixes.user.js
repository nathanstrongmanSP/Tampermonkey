// ==UserScript==
// @name         BrightGauge Fixes
// @namespace    http://tampermonkey.net/
// @version      3.0
// @description  Add missing features that should be there...
// @author       Nathan Strongman nathan.strongman@starport.ca
// @match        https://sp.brightgauge.co/public/dashboards/*
// @match        https://*.brightgauge.co/dashboards/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=brightgauge.co
// @updateURL    https://github.com/nathanstrongmanSP/Tampermonkey/raw/master/BrightGaugeFixes.user.js
// @downloadURL  https://github.com/nathanstrongmanSP/Tampermonkey/raw/master/BrightGaugeFixes.user.js
// @run-at       document-start
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle('.dashboards .container-fluid::-webkit-scrollbar { display: none; !important; }');
GM_addStyle('.dashboards .container-fluid {-ms-overflow-style: none;}');
GM_addStyle('.dashboards .container-fluid {scrollbar-width: none;}');

(function () {
  'use strict';

  // --- Config ---
  const FILE_RE = /SLA-Alert-Lera\.mp3(\?|$)/i;
  const STORAGE_KEY = 'leraMuteEnabled';

  // --- State ---
  let muteEnabled = (localStorage.getItem(STORAGE_KEY) || 'true') === 'true'; // default ON (muted)
  const nativePlay = HTMLMediaElement.prototype.play;
  const nativePause = HTMLMediaElement.prototype.pause;

  // --- Utilities ---
  const shouldMute = (el) =>
    el instanceof HTMLAudioElement &&
    FILE_RE.test(el.currentSrc || el.src || '');

  function setMute(enabled) {
    muteEnabled = enabled;
    localStorage.setItem(STORAGE_KEY, String(enabled));
    updateButtonUI();
  }

  // --- Intercept play() globally (reliable even for new Audio()) ---
  HTMLMediaElement.prototype.play = function (...args) {
    try {
      if (muteEnabled && shouldMute(this)) {
        try {
          nativePause.call(this);
          this.currentTime = 0;
          this.muted = true;
        } catch (_) {}
        // Resolve like play() to avoid breaking site code that awaits it
        return Promise.resolve();
      }
    } catch (_) {}
    return nativePlay.apply(this, args);
  };

  // --- As a fallback, also catch 'play' events (in case something bypasses prototype) ---
  // (Not strictly necessary, but cheap insurance.)
  window.addEventListener(
    'play',
    (ev) => {
      const el = ev.target;
      if (muteEnabled && shouldMute(el)) {
        try {
          nativePause.call(el);
          el.currentTime = 0;
          el.muted = true;
        } catch (_) {}
      }
    },
    true // capture
  );

  // --- UI Button ---
  let btn;
  function ensureButton() {
    if (btn && document.body && btn.isConnected) return;
    if (!document.body) return;

    btn = document.createElement('button');
    btn.type = 'button';
    btn.id = 'lera-mute-toggle';
    btn.title = 'Toggle mute for SLA-Alert-Lera.mp3';
    btn.addEventListener('click', () => setMute(!muteEnabled));

    // Minimal, unobtrusive styling (bottom-right)
    btn.style.position = 'fixed';
    btn.style.right = '90px';
    btn.style.top = '8px';
    btn.style.zIndex = '2147483647';
    //btn.style.padding = '8px 12px';
    btn.style.borderRadius = '999px';
    btn.style.border = '1px solid rgba(0,0,0,0.2)';
    btn.style.background = 'rgba(255,255,255,0.85)';
    btn.style.backdropFilter = 'blur(6px)';
    btn.style.boxShadow = '0 4px 14px rgba(0,0,0,0.15)';
    btn.style.fontFamily = 'system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif';
    btn.style.fontSize = '12px';
    btn.style.cursor = 'pointer';
    btn.style.userSelect = 'none';
    btn.style.color = '#111';

    updateButtonUI();
    document.body.appendChild(btn);
  }

  function updateButtonUI() {
    if (!btn) return;
    if (muteEnabled) {
      btn.textContent = '🔕 SLA: Muted';
      btn.style.opacity = '1';
    } else {
      btn.textContent = '🔔 SLA: Allowed';
      btn.style.opacity = '0.9';
    }
  }

  // Inject ASAP, even with SPA nav
  const ro = new MutationObserver(() => ensureButton());
  ro.observe(document.documentElement, { childList: true, subtree: true });
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ensureButton);
  } else {
    ensureButton();
  }

})();
