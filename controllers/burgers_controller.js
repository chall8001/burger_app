const express = require('express')
const burger = require('../models/burger.js')
const router = express.Router()

//renders the homepage to the user
router.get('/', (req, res) => {
    console.log(req)
    burger.all((data) => {
      const hbsObject = {
        burgers: data,
      };
      console.log(hbsObject);
      res.render('index', hbsObject);
    });
  });

  //allows users to post new burgers 
  router.post('/api/burgers', (req, res) => {
    burger.create(['burger_name', "devoured"], [req.body.name, false], (result) => {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });

  router.put('/api/burgers/:id', (req, res) => {
    const condition = `id = ${req.params.id}`;
  
    console.log('condition', condition);
  
    burger.update(
      {
        devoured: true,
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
