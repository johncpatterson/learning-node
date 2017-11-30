const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  //res.send('Hey! It works!');
  const john = {name:'John', age:30, cool:true, dog:'Ella'};
  //res.json(john);
  res.render('hello', {
    name: john.name,
    dog: john.dog,
    title: 'I like beer'
    // or
    // dog: req.query.dog to get stuff passed from 
  });

});

module.exports = router;
 