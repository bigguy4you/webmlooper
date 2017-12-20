// ==UserScript==
// @name        .mp4 & .webm looper
// @namespace   bigguy4you
// @description loops HTML5 videos
// @include     *.webm*
// @include     *.mp4*
// @run-at      document-start
// @version     1.2
// @grant       none
// ==/UserScript==
var video = document.querySelector('body > video');
video.loop = true;