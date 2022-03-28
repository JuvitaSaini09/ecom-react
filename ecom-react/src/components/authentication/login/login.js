import React from 'react'

function Login() {
  return (
    <>
    <main className="login-page-container">
  <div>
    <h1>Login</h1>
  </div>
  <div className="text-input-container">
    <label htmlFor="text-input">E-mail</label>
    <input type="email" className="text-input" placeholder="Your Email" /><span className="login-icon"><i className="fas fa-envelope" /></span>
  </div>
  <div className="text-input-container">
    <label htmlFor="text-input" auto-complete="new-password">Password</label>
    <input type="password" className="text-input" placeholder="Your password" /><span className="login-icon"><i className="fas fa-eye" /></span>
  </div>
  <div className="login-bottom"><button>Login</button>
    <p>Create Account <a href="/components/authentication-page/signup-page.html">Sign up </a></p>
  </div>
</main>
    </>

  )
}

export  {Login}