// ==UserScript==
// @name         Chilindo Smart Auto Bid
// @namespace    http://www.commandlab.net
// @version      0.2
// @description  Intelligent autobid script
// @author       DuyLTV
// @match       http://www.chilindo.com/product/*
// @match       http://www.chilindo.com/vn/product/*
// @match       https://www.chilindo.com/vn/product/*
// @match       http://www.chilindo.com/vn/Product/*
// @match       http://www.chilindo.com/vn/auction/*
// @match       https://www.chilindo.com/vn/Product/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var maxPrice = 40;
    var myId = 'duy.nguyễn.164053';

    // PRODUCT TABLE
    var productTable = [
        'đèn',
        'đai',
        'loa',
        'pin',
        'khoan',
        'bộ công cụ',
    ];
    // TABLE OF PRICE
    var priceTable = {
        'đèn': 5,
        'đai': 10,
        'loa': 15,
        'pin': 15,
        'khoan': 15,
        'bộ công cụ': 15,
    };

    function getText(el) {
        return el.textContent || el.innerText;
    }
    function ClickButtonBid(){
        document.getElementById("ContentPlaceHolder1_btnBid").click();
    }
    function isInArray(value, array) {
        return array.indexOf(value) > -1;
    }
    function startAutoBid(){
        var productElement = document.getElementById('ContentPlaceHolder1_lbTitle');
        var productName = getText(productElement);
        console.log('Product:', productName);

        var productTableLength = productTable.length;
        for (var i = 0; i < productTableLength; i++) {
            if (productName.toLowerCase().indexOf(productTable[i]) !== -1)
            {
                maxPrice = priceTable[productTable[i]];
                console.log('Using rule of:', productTable[i]);
            }
        }
        console.log('MaxPrice:', maxPrice);

        setInterval(function(){
            var timeelement = document.getElementById('spanCountDown');
            var time = getText(timeelement);
            var currentWinnerElement = document.getElementsByClassName('current_winner')[0];
            var currentWinner = getText(currentWinnerElement).split(" ");
            var priceElement = document.getElementById('ContentPlaceHolder1_txtBidNew');
            var price_value = priceElement.value;
            var price = parseInt(price_value.substring(0,price_value.length - 1));
            console.log('myId', myId);
            console.log('currentWinner', currentWinner);
            if(!isInArray(myId, currentWinner)){
                    if(price <= maxPrice && Number.isInteger(price)){
                        console.log("Bid For "+price);
                        document.getElementById('ContentPlaceHolder1_txtBidNew').value = price_value;
                        ClickButtonBid();
                    }
                //}
            }
        }, 3000);
    }
    startAutoBid();
})();
