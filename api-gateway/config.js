/*
============================================
; Title:  config.js
; Author: Emily Richter
; Date:   4 May 2020
; Description: JWT public key
;===========================================
*/

var config = {};

config.web = {};

config.web.port = process.env.PORT || '3000';
config.web.secret = 'topsecret';

module.exports = config;
