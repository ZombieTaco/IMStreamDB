// ==UserScript==
// @name         IMStreamDB
// @namespace    http://imdb.com/
// @version      1.0.0
// @description  If source, adds stream to the movie on the IMDB page
// @author       ZombieTaco
// @include      http://www.imdb.com/*
// @homepageURL  https://github.com/ZombieTaco/IMStreamDB
// @supportURL   https://github.com/ZombieTaco/IMStreamDB/issues
// @grant        none
// ==/UserScript==
var api_key = "193447211";
$(document).ready(function() {
    'use strict';
    var currentTT = document.head.querySelector("[property=pageId]").content;
    $(".subtext").append("<a style='height:15px;float:right;cursor:pointer;color:#e4bb24;text-decoration:none;' onclick='stream()'>STREAM</a>");
    window.stream = function(){
        $(".slate_wrapper").html("<iframe src='https://videospider.in/getvideo?key="+api_key+"&video_id="+currentTT+"' width='667' height='268' frameborder='0' allowfullscreen='true' scrolling='no'></iframe>");
    };
});

