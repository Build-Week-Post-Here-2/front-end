import React from 'react'

export default function Login(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props

    const onChange = event => {
        const { name, value } = event.target
        change(name, value)
    }
    
    const onSubmit = event => {
        event.preventDefault();
        submit()
    }

    return(
        <div>
            <form onSubmit={onSubmit}>
                <label> Username:
                    <input
                        type='text'
                        name='username'
                        value={values.username}
                        placeholder='Username'
                        onChange = {onChange}
                    />
                    <div>{errors.username}</div>
                </label> <br />

                <label>Password:
                    <input 
                        type='text'
                        name='password'
                        value={values.password}
                        placeholder='Password'
                        onChange = {onChange}
                    />
                </label>
                <div>{errors.password}</div>
                <button disabled={disabled} name='loginButton'>Login</button>
            </form>
        </div>
    )

}