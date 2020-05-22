/*
============================================
; Title:  index.js
; Author: Emily Richter
; Date:   20 May 2020
; Description: routes
;===========================================
*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
