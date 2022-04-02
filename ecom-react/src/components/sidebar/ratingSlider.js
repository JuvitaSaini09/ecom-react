import React from 'react'

function RatingSlider() {
  return (
    <div className="slider-container">
      <h2>Rating</h2>
      <p className="rating-value">5 ★</p>
      <span>1</span> <input type="range" className="slider" id="slider-rating" min={1} max={5} /><span>5</span>
    </div>
  )
}

export { RatingSlider }