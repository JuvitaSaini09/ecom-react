import React from 'react'

function Logout() {
  return (
    <>
    <main className="login-page-container">
  <div>
    <h1>Log out Succesful !</h1>
    <div className="login-bottom">
      <a href="/components/authentication-page/login-page.html"> <button>Log In</button> </a>
      <a href="/index.html"> <button>Home</button></a>
    </div>
  </div></main>

    </>
  )
}

export {Logout}