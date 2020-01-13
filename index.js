// implement your API here

const express = require('express');

const Users = require('./data/db.js');

const server = express();

server.use(express.json());

//Get to '/'

// server.get('/', function(req, res) {
//   res.send( { hello: 'You made it!' });
// });

// See a list of Data from DataBase

server.get('/api/users', (req, res) => {
  Users.find()
   .then(user => {
      console.log('Hubs', user);
      res.status(200).json(user);
  })
  .catch(error => {
    console.log(error);
    //handle the error
    res.status(500).json({
      errorMessage: "We can't get the data you're requesting",
    });
  });
});

// create a User

server.post('/api/users', (req, res) => {
  const userData = req.body;

  Users.insert(userData)
    .then(user => {
      res.status(201).json(user);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        errorMessage: 'Sorry, we ran into an error creating the user',
      });
    });
});

// delete a user

server.delete('/api/users/:id', (req, res) => {
  const id = req.params.id;

  Users.remove(id)
    .then(deleted => {
      res.status(200).json(deleted);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        errorMessage: "Sorry, we can't delete the user",
      });
    });
});

//update user

server.put('/api/users/:id', (req, res) => {
  const id = req.params.id;

  Users.update(id, req.body)
    .then(updated => {
      res.status(200).json(updated);
    })
    .catch(error => {
      console.log(error);
      res.status(400).json({
        errorMessage: "Please provide name and bio for the user."
      })
      // res.status(404).json({
      //   errorMessage: "The user with the specified ID does not exist."
      // })
      // res.status(500).json({
      //   errorMessage: "The user information could not be modified."
      // })
    })
});


const port = 8000;
server.listen(port, () => console.log(`\n ** api on port:${port} ** \n`));