const express = require('express');
const router = express.Router();
const Job = require('../models/Job');


//rota teste
router.get('/teste', (req, res) => {
    res.send('deu certo');
});

// add job via post
router.post('/add', (req, res) => {

   let {title, salary, company, email, new_job, description} = req.body;

   //insert
   Job.create({
       title,
       description,
       salary,
       company,
       email,
       new_job
   })
   .then(() => {
       res.redirect("/");
   })
   .catch(err => console.log(err));
});

module.exports = router