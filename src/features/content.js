import React from "react";
import PropTypes from 'prop-types';
import './content.css'


const Sidebar = ({ children }) => (
    <main>
        <div className='left-content'>
            <h1>Filters</h1>
            <div>
               <h2>Categories</h2>
               <div className='categories-items'>
                  <input type="checkbox" id="itemfilter" name="itemfilter" value="Gardening"></input>
                  <label for="itemfilter"> Gardening</label>
               </div>
               <div className='categories-items'>
                  <input type="checkbox" id="itemfilter" name="itemfilter" value="Plants"></input>
                  <label for="itemfilter"> Plants</label>
               </div>
               <div className='categories-items'>
                  <input type="checkbox" id="itemfilter" name="itemfilter" value="Seeds"></input>
                  <label for="itemfilter"> Seeds</label>
               </div>
               <div className='categories-items'>
                  <input type="checkbox" id="itemfilter" name="itemfilter" value="Bulbs"></input>
                  <label for="itemfilter"> Bulbs</label>
               </div>
               <div className='categories-items'>
                  <input type="checkbox" id="itemfilter" name="itemfilter" value="Planters"></input>
                  <label for="itemfilter"> Planters</label>
               </div>
               <p>Others </p>
            </div>
            <div className='pricerange'>
               <h2>Price Range</h2>
                 <div className='priceinputs'>
                      <input  type="number" min="0.00" max="10000.00" step="0.01" placeholder='Min'></input>
                      <input  type="number" min="0.00" max="10000.00" step="0.01" placeholder='Max'></input>
                 </div>
                 <button type="button">Set Price</button>
            </div>
            <div className='rating'>
               <h2>Rating</h2>
               <div>
               <input type="checkbox" id="ratefilter" name="ratefilter" value="****  above"></input>
                <label for="ratefilter"> ****  above</label>
               </div>
            </div>
            <div className='refferal'>
                <h3>Get 30% off</h3>
                <p>share your refferal code and get discounted</p>
                <button type="button">Share</button>
            </div>

        </div>
      {children}
    </main>
  );


  Sidebar.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
  export default Sidebar;
  