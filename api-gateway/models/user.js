/*
============================================
; Title:  user.js
; Author: Emily Richter
; Date:   20 May 2020
; Description: User model, schema, and user add and query functions
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

 const User = module.exports = mongoose.model('User', userSchema);

 /**
  * Database queries
  */

// user.save is used to add a new user in the database
module.exports.add = (user, callback) => {
  user.save(callback);
};

module.exports.getById = (id, callback) => {
  var query = {_id: id};
  User.findById(query, callback);
};

module.exports.getOne = (e, callback) => {
  var query = {email: e};
  User.findOne(query, callback);
};
