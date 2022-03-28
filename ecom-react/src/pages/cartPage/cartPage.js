import React from 'react'
import { CartItems, Navbar, PriceTable } from '../../components/allComponents'

function CartPage() {
  return (
    <>
    <Navbar />
    <main class="cart-page">
        <CartItems />
        <PriceTable />
    </main>
    <footer />
    </>
  )
}

export default CartPage