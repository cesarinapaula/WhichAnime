//set up database
var express = require('express');
var router = express.Router();

var pgp = require('pg-promise')({});
var conStr = 'postgres://c4q:Queens!rocks';
conStr += '@localhost:5432/whichanime';
var db = pgp(conStr);


router.post('/newuser', function(req, res, next) {
  db.none('INSERT INTO users (userid) VALUES ($1)', [req.body.userid])
  .then((data) => {
    res.send(`created event for unique user: ${req.body.userid}`);
  })
  .catch(err => {
    console.log(err);
    res.status(500).send("error inserting user");
});});

//route checking
router.get('/usercount/:userid', function(req,res,next){
  db.any('SELECT COUNT(*) FROM users WHERE userid=$1', [req.params.userid])
  .then((data)=>{
    res.send(data);
  })
  .catch(err=>{
    console.log(err);
    res.status(500).send("error inserting user");
  });
});
router.post('/genre', function(req, res, next) {
  db.none('INSERT INTO genre (user_id, genre) VALUES ((SELECT id FROM users WHERE userid=$1), $2)', [req.body.userid, req.body.genre])
  .then((data) => {
    res.send(`submitted user: ${req.body.userid}, genre: ${req.body.genre}`);
  })
  .catch(err => {
    console.log(err);
    res.status(500).send("error inserting user and genre");
});});

router.post('/keyword', function(req, res, next) {
  db.none('INSERT INTO keyword (user_id, userkeyword) VALUES ((SELECT id FROM users WHERE userid=$1), $2)', [req.body.userid, req.body.userKeyword])
  .then((data) => {
    res.send(`submitted user: ${req.body.userid}, keyword: ${req.body.userKeyword}`);
  })
  .catch(err => {
    console.log(err);
    res.status(500).send("error inserting user and their keyword");
});});

router.post('/randomanimetitle', function(req, res, next) {
  db.none('INSERT INTO randomanime (user_id, randomnumber) VALUES ((SELECT id FROM users WHERE userid=$1), $2)', [req.body.userid, req.body.randomTitle])
  .then((data) => {
    res.send(`submitted user: ${req.body.userid}, random id/number: ${req.body.randomnTitle}`);
  })
  .catch(err => {
    console.log(err);
    res.status(500).send("error inserting user and their keyword");
});});


router.get('/genrestatistics', function(req, res, next){
  db.any(`SELECT genre AS value, COUNT(genre) FROM genre GROUP BY genre`)
  .then((data)=>{
    res.send(data);
  })
  .catch(err=>{
    console.log(err);
    res.status(500).send('error');
  })
})
//router.get('/keywordstatistics...)
router.get('/keywordstatistics', function(req,res,next){
  db.any(`SELECT userkeyword AS value, COUNT (userkeyword) FROM keyword GROUP BY userkeyword`)
  .then((data)=>{
    res.send(data);
  })
  .catch(err=>{
    console.log(err);
    res.status(500).send('error');
  });
});

router.get('/totalusers', function(req, res, next){
  db.any(`SELECT COUNT(*) FROM users`)
  .then((data)=>{
    res.send(data);
  })
  .catch(err=>{
    console.log(err);
    res.status(500).send('error');
  });
});

module.exports = router;

/*
router.post('/ghiblititle', function(req, res, next){
  db.none(`INSERT INTO ghiblititles (title) VALUES ($1)`, [req.body.title])
    .then((data)=>{
      res.send(`insert title for ${req.body.title}`);
    })
    .catch(err=>{
      console.log(err);
      res.status(500).send('error inserting title');
    });
});

router.get('/ghiblititle', function(req,res,next){
  db.any(`SELECT title FROM ghiblititles`)
    .then(response=>{
      res.send(response);
    })
    .catch(err=>{
      console.log(err);
    });
});

router.post('/ghiblikitsulink', function (req, res, next){
  db.none(`INSERT INTO ghiblikitsulink (title_id, kitsuid), VALUES ((SELECT id FROM ghiblititles WHERE title=($1)), $2)`, [req.body.title, req.body.kitsuid])
    .then((data)=>{
      res.send(`insert Kitsu id number ${req.body.kitsuid}, for title ${req.body.title}`);
    })
    .catch(err=>{
      console.log(err);
      res.status(500).send('error inserting number');
    });
});

*/