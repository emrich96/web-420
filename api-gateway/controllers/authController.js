/*
============================================
; Title:  authController.js
; Author: Emily Richter
; Date:   4 May 2020
; Description: Controller for user authorization
;===========================================
*/

var User = require('../models/user');

// Register new user on POST
exports.user_register = function(req, res) {
  res.send('NOT IMPLEMENTED: User registration POST');
};

// Verify token on GET
exports.user_token = function(req, res) {
  res.send('NOT IMPLEMENTED: User token lookup GET');
}
