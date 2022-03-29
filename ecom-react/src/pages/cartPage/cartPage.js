import React from 'react'
import "./cartPage.css"
import { CartItems, PriceTable } from '../../components/allComponents'
import { NavbarLogout } from '../../components/navbar/navbarLogout'

function CartPage() {
  return (
    <>
    <NavbarLogout />
    <main class="cart-page">
        <CartItems />
        <PriceTable />
    </main>
    <footer />
    </>
  )
}

export default CartPage