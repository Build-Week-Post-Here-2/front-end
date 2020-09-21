import React, { useState, useEffect } from 'react';
import axios from 'axios'
import * as yup from 'yup'
import schema from './Validation/schema'
import Saved from './components/Saved'
import './App.css'
import Login from './Login'


const initialFormValues = {
  username: '',
  password: '',
}

const initialFormErrors = {
  username: '',
  password: '',
}

const initialDisabled = true

function App() {

  const [login, setLogin] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)


  const postNewLogin = newLogin => {
    axios.post('https://reddit-sami.herokuapp.com/api/users/login', newLogin)
    .then(res => {
      setLogin([...login, newLogin])
      setFormValues(initialFormValues)
      console.log(newLogin)
    })
    .catch(err => {
      alert('There was an error logging you in, please reload the page and try again.')
      console.log(err)
    })
  }

  const formSubmit = () => {
    const newLogin = {
      username: formValues.username.trim(),
      password: formValues.password.trim(),
    }
    postNewLogin(newLogin)
  }
  
  const validate = (name, value) => {
    yup
    .reach(schema, name)
    .validate(value)
    .then(valid => {
      setFormErrors({
        ...formErrors,
        [name]:''
      })
    })
    .catch(err => {
      setFormErrors({
        ...formErrors,
        [name]: err.errors[0]
      })
    })
  }

  const inputChange = (name, value) => {
    validate(name, value)
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  useEffect(() => {
    schema.isValid(formValues)
    .then(valid => {
      setDisabled(!valid)
    })
  }, [formValues])

  return (
    <div className="App">
        <Login 
        values = {formValues}
        change = {inputChange}
        submit = {formSubmit}
        disabled = {disabled}
        errors = {formErrors}
        />
    </div>


  );
  <Saved />
}

export default App;
