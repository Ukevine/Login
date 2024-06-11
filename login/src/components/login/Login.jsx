import React from 'react'

const Login = () => {
  return (
    <div className=''>
    <h1>LOGIN</h1>
    <p>LOGIN</p>
    <p>SIGNUP</p>
    <form>
        <input type='email' placeholder='Email' />
        <input type='password' placeholder='Password'/>
    </form>
    <p>Remember Me</p>
    <p>Forrgot Password ?</p>

    <form>
        <button >LOGIN</button>
    </form>
    <p>or Login with </p>
    <p>Don't have an account? Sign up</p>
    </div>
  )
}

export default Login
