const express = require('express');
const PORT = process.env.PORT || 5000;
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const uri = require('./config/database');

const app = express();

//mongoose.connect('mongodb://localhost/mtest');
mongoose.connect(uri.mongoURI);
let db = mongoose.connection;


//check connection
db.once('open',()=>{
  console.log('connected to MongoDB');
});

//check for DB errors
db.on('error',(err)=>{
  console.log(err);
});

//body parser middleware
app.use(bodyParser.urlencoded({extended:true}))

//parse application-json
app.use(bodyParser.json());



let Article = require('./models/student')

app.set('views',path.join(__dirname, 'views'));
app.set('view engine','ejs');


app.get('/',(req,res)=>{
  res.redirect('/mongodb')
});

app.get('/mongodb',(req,res)=>{
  Article.find({},(err,articles)=>{
    if(err)
    {
      console.log(err);
    }
    else {
      res.render('pages/mongodb',{
        articles:articles
      });
    }
  });
});

app.post('/mongodb/add',(req,res)=>{

  let article = new Article();
  article.netid = req.body.netid;
  article.fname = req.body.fname;
  article.lname = req.body.lname;
  article.email = req.body.email;
  article.contact = req.body.contact;

  article.save((err)=>{
    if(err)
    {
      console.log(err);
      return;
    }
    else {
      res.redirect('/mongodb')
    }
  })


});

app.get('/mongodb/delete/:id',(req,res)=>{
Article.remove({
    _id:req.params.id
  }).then(()=>{
    res.redirect('/mongodb');
  })

});

app.listen(PORT,()=> console.log(`server started on port ${PORT}`));
