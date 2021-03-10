const express = require('express')
const burger = require('../models/burger.js')
const router = express.router

//renders the hompage to the user
router.get('/', (req, res) => {
    //what does this do?
    burger.all((data) => {
      const hbsObject = {
        burgers: data,
      };
      console.log(hbsObject);
      res.render('index', hbsObject);
    });
  });

  router.post('/api/burgers', (req, res) => {
    burger.create(['name'], [req.body.name], (result) => {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });
  
  router.put('/api/cats/:id', (req, res) => {
    const condition = `id = ${req.params.id}`;
  
    console.log('condition', condition);
  
    cat.update(
      {
        sleepy: req.body.sleepy,
      },
      condition,
      (result) => {
        if (result.changedRows === 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        }
        res.status(200).end();
      }
    );
  });
  





module.exports = router;
