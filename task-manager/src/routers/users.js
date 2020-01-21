const express = require('express');
const Users = require('../models/user');
const router = new express.Router();

module.exports = router;

router.delete('/users/:id', async(req, res) =>
{
  try
  {
    const user = await Users.findByIdAndDelete(req.params.id);
    if (!user)
    {
      return res.status(404).send();
    } else
    {
      res.send(user);
    }
  } catch (e)
  {
    res.status(500).send(e);
  }
})

router.post('/users/login', async(req, res) =>
{
  try
  {
    const user = await Users.findByCredentials( req.body.email,
        req.body.password );
    const token = await user.generateAuthToken();
    res.status( 200 ).send( user );
  } catch (e)
  {
    res.status(400).send(e.toString());
  }
});

router.post('/users', async(req, res) =>
{
  const user = new Users(req.body);

  try
  {
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send(user);
  } catch (e)
  {
    res.status(400).send(e)
  }
})

router.patch('/users/:id', async (req, res) =>
{
  const updates = Object.keys(req.body)
  const allowedUpdates = ['name', 'email', 'password', 'age']

  const isValidOperation = updates.every( (update) => allowedUpdates.includes(update) )

  if( !isValidOperation )
  {
    return res.status(400).send({error: 'Invalid properties'})
  }

  try
  {
    const user = await Users.findById(req.params.id);
    updates.forEach((update) =>
    {
      user[update] = req.body[update];
    });
    await user.save();

    // const user = await Users.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true})

    if (!user)
    {
      return res.status(404).send();
    }

    res.send(user);
  }
  catch(e)
  {
    res.status(400).send(e)
  }
})

router.get('/users', async (req, res) =>
{
  try{
    const users = await Users.find({});
    res.send(users)
  }
  catch(error)
  {
    res.status(500).send(error)
  }
})

router.get('/users/:id', async (req, res) =>
{
  try{
    const _id = req.params.id;
    const user = await Users.findById(_id);
    if( !user )
    {
      return res.status(404).send()
    }
    res.send(user)
  }
  catch( e )
  {
    res.status(500).send(e)
  }
})

