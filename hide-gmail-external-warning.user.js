// ==UserScript==
// @name         Hide external recipients warnings in Google Workspace's Gmail
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  For cases when you cannot follow https://support.google.com/a/answer/7380041?hl=en
// @author       Hugo Haas
// @include      https://mail.google.com/mail/*
// @grant        GM_addStyle
// ==/UserScript==

(function () {
  "use strict";

  GM_addStyle("div.aau {display: none;}");
})();
