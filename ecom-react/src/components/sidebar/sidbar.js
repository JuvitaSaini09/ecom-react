import React from 'react'



function Sidebar() {

  return (
    <>
     <section className="side-drawer">
  <div className="side-drawer-container">
    <div className="heading-side-drawer">
      <h1>Filters</h1>
      <button className="btn-clear">clear</button>
    </div>
    <div className="slider-container">
      <h2>Rating</h2>
      <p className="rating-value">5 ★</p>
      <span>1</span> <input type="range" className="slider" id="slider-rating" min={1} max={5} /><span>5</span>
    </div>
    <div className="category-container">
      <h2>Genre</h2>
      <div>
        <input type="checkbox" className="category" id="all-book" name="all" defaultChecked /><label htmlFor="all-book">All</label>
      </div>
      <div>
        <input type="checkbox" className="category" id="cook-book" name="cook book" />
        <label htmlFor="cook-book">Cooking</label>
      </div>
      <div>
        <input type="checkbox" className="category" id="drama" name="drama" />
        <label htmlFor="drama">Drama</label>
      </div>
      <div>
        <input type="checkbox" className="category" id="health" name="health" />
        <label htmlFor="health">Health/Fitness</label>
      </div>
      <div>
        <input type="checkbox" className="category" id="non-fiction" name="non-fiction" />
        <label htmlFor="non-fiction">Non-fiction</label>
      </div>
      <div>
        <input type="checkbox" className="category" id="biography" name="biogaphy" />
        <label htmlFor="biography">Biography</label>
      </div>
      <div>
        <input type="checkbox" className="category" id="sci-fiction" name="sci-fiction" />
        <label htmlFor="sci-fiction">Science Fiction</label>
      </div>
    </div>
    <div className="Price-range-container">
      <h2>Sort by</h2>
      <div>
        <input type="radio" className="price-range" id="low-to-high" name="price-radio-button" /><label htmlFor="low-to-high">Low to high</label><br />
        <input type="radio" className="price-range" id="high-to-low" name="price-radio-button" />
        <label htmlFor="high-to-low">High to low</label>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export {Sidebar };