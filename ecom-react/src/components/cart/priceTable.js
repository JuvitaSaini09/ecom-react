import React from 'react'

function PriceTable() {
  return (
    <>
   <section className="col-2">
  <div className="price-table">
    <table>
      <tbody><tr className="price-table-h">
          <th>Price details</th>
          <td />
        </tr>
        <tr>
          <td>Price(3 items)</td>
          <td>₹. 1300</td>
        </tr>
        <tr>
          <td>GST </td>
          <td>₹. 1389</td>
        </tr>
        <tr>
          <td>Delivery</td>
          <td>₹. 0</td>
        </tr>
        <tr className="price-table-foot">
          <td>Total Price</td>
          <td>₹. 1389</td>
        </tr>
      </tbody></table>
    <button className="btn-place-order">Place Order</button>
  </div>
</section>

    </>
  )
}

export {PriceTable} 