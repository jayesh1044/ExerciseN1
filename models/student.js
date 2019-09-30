
let mongoose = require('mongoose');

//Article Schema
let articleSchema = mongoose.Schema({

  netid:{
      type:String,
      required : true
  },
  fname:{
      type:String,
      required : true
  },
  lname:{
      type:String,
      required : true
  },
  email:{
      type:String,
      required : true
  },
  contact:{
      type:String,
      required : true
  }


});

let Article = module.exports = mongoose.model('Article',articleSchema);
