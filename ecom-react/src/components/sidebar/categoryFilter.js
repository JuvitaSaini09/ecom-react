import React from 'react'
import { useFilter } from '../../context/filterContext/filterContext';

function CategoryFilter() {
    const {dispatch}=useFilter();
  return (
    <div className="category-container">
      <h2>Genre</h2>
      <div>
        <input type="checkbox" className="category" id="all-book" name="all" defaultChecked /><label htmlFor="all-book">All</label>
      </div>
      <div>
        <input type="checkbox" className="category" id="self-help" name="self-help" />
        <label htmlFor="self-help">Sel-help</label>
      </div>
      <div>
        <input type="checkbox" className="category" id="horror" name="horror" />
        <label htmlFor="horror">Horror</label>
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
        <input type="checkbox" className="category" id="novel" name="novel" />
        <label htmlFor="novel">Novel</label>
      </div>
      <div>
        <input type="checkbox" className="category" id="sci-fiction" name="literature" />
        <label htmlFor="literature">Literature</label>
      </div>
    </div>
  )
}

export { CategoryFilter }