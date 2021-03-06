const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Board = require('../models/board');


router.post('/boards', (req, res, next) => {
  User.findById({ _id: req.body.user_id }).then((user) => {
    const b = {title: req.body.title,
              description: req.body.description}    
    user.boards.push(b);
    user.save().then(() => {
      res.send(user);
    }).catch((err) => {
    })
  })
})
router.delete('/boards/:id', (req, res, next) => {
  User.findById({ _id: req.body.user_id }).then((user) => {
    user.boards.find((ele) => {
      return ele._id ==req.params.id
    }).remove();
    user.save().then((user) => {
      res.send(user);
    }).catch((err)=>{
      // dunnon what to do yet
    })
  })
})

module.exports = router;