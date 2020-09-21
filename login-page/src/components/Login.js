import React, { useState, useEffect } from 'react';
import * as yup from 'yup'
import schema from '../Validation/schema'
import axiosWithAuth from '../utlis/axiosWithAuth'

const initialFormValues = {
    username: '',
    password: '',
  }
  
  const initialFormErrors = {
    username: '',
    password: '',
  }
  
  const LoginForm = (props) => {
  const initialDisabled = true

  const [login, setLogin] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)


  const postNewLogin = newLogin => {
    axiosWithAuth()
    .post('/users/login', newLogin)
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
  
  const validate = e => {
    const name = e.target.name
    const value = e.target.value

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
    setFormValues({
        ...formValues, [name]: value
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
                   <form onSubmit={formSubmit}>
                <label> Username:
                    <input
                        type='text'
                        name='username'
                        value={formValues.username}
                        placeholder='Username'
                        onChange = {validate}
                    />
                    <div>{formErrors.username}</div>
                </label> <br />

                <label>Password:
                    <input 
                        type='text'
                        name='password'
                        value={formValues.password}
                        placeholder='Password'
                        onChange = {validate}
                    />
                </label>
                <div>{formErrors.password}</div>
                <button disabled={disabled} name='loginButton'>Login</button>
            </form>
        
    </div>


  );

  }

  export default LoginForm