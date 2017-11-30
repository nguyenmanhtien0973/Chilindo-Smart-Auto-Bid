// ==UserScript==
// @name         Back to chilindo
// @namespace    http://commandlab.net
// @version      0.1
// @description  Back to Chilindo incase error page appears
// @author       DuyLTV
// @match        http://www.chilindo.com/vn/error*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.history.back();
})();
