/*
============================================
; Title:  user.js
; Author: Emily Richter
; Date:   4 May 2020
; Description: User model and schema
;===========================================
*/

/**
 * Fields username, password, and email
 */

 var mongoose = require('mongoose');
 var userSchema = new mongoose.Schema({
   username: String,
   password: String,
   email: String
 });

 module.exports = mongoose.model('User', userSchema);

 /**
  * Database queries
  */
