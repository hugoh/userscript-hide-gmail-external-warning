// ==UserScript==
// @name         Hide external recipients warnings in Google Workspace's Gmail
// @namespace    https://github.com/hugoh/
// @version      0.1
// @source       https://github.com/hugoh/userscript-hide-gmail-external-warning
// @downloadURL  https://github.com/hugoh/userscript-hide-gmail-external-warning/raw/main/hide-gmail-external-warning.user.js
// @description  For cases when you cannot follow https://support.google.com/a/answer/7380041?hl=en
// @author       Hugo Haas
// @include      https://mail.google.com/mail/*
// @grant        GM_addStyle
// ==/UserScript==

(function () {
  "use strict";

  GM_addStyle("div.aau {display: none;}");
})();
