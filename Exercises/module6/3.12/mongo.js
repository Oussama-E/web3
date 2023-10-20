const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]
const contactName = process.argv[3]
const contactNum = process.argv[4]

const url =
  `mongodb+srv://oussama:${password}@vinci.dkxrfek.mongodb.net/noteApp?retryWrites=true&w=majority`

mongoose.set('strictQuery',false)
mongoose.connect(url)

const contactSchema = new mongoose.Schema({
  name: String,
  num: String,
})

const Contact = mongoose.model('Contact', contactSchema)

const contact = new Contact({
  name: contactName,
  num: contactNum,
})

contact.save().then(result => {
  console.log('contact saved!')
  Contact.find({}).then(result => {
    result.forEach(c => {
      console.log('added', c.name, 'number', c.num, 'to phonebook') 
    })
    mongoose.connection.close()
  })
 
})

