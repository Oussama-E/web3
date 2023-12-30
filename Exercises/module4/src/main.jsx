import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './components/App/App'
import axios from 'axios'

axios
.get('http://localhost:3001/api/contact/getAll')
.then(response => {
  const contact = response.data
  console.log(contact);
  ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
    )
})



