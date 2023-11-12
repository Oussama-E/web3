const router = require('express').Router()
const Contact = require("../models/contact")
const NotFoundError = require('../utils/NotFoundError')


router.get("/getAll", (request, response) => {
    Contact.find({}).then(contacts => {
       response.json(contacts)
    })
  })
  
  router.post("/", (request, response) => {
    const body = request.body
    if(body.name == undefined){
      return response.status(400).json({error: 'content missing'})
    }
  
    const contact = new Contact({
      name: body.name,
      num: body.num
    })
  
    contact.save().then(savedContact => {
      response.json(savedContact)
    })
  })
  
  
  router.delete("/:id", (request, response, next) => {
    Contact.findByIdAndDelete(request.params.id)
      .then(result => {
        response.status(204).end()
      })
      .catch(error => next(error))
  })
  
  router.put('/:id', (request, response, next) => {
    const body = request.body
  
    const contact = {
      name: body.name,
      num: body.num
    }
  
    Contact.findByIdAndUpdate(request.params.id, contact, {new: true})
      .then(updatedContact => {
        response.json(updatedContact)
      })
      .catch(error => next(error))
  })

  module.exports = router