/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import './content.css';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

function Sidebar({ children }) {
  return (
    <main>
      <div className="left-content">
        <h1 className="filter-head">Filters</h1>
        <div>
          <h2 className="cate-head">Categories</h2>
          <div className="categories-items">
            <input type="checkbox" id="itemfilter" name="itemfilter" value="Gardening" />
            <label htmlFor="itemfilter"> Gardening</label>
          </div>
          <div className="categories-items">
            <input type="checkbox" id="itemfilter" name="itemfilter" value="Plants" />
            <label htmlFor="itemfilter"> Plants</label>
          </div>
          <div className="categories-items">
            <input type="checkbox" id="itemfilter" name="itemfilter" value="Seeds" />
            <label htmlFor="itemfilter"> Seeds</label>
          </div>
          <div className="categories-items">
            <input type="checkbox" id="itemfilter" name="itemfilter" value="Bulbs" />
            <label htmlFor="itemfilter"> Bulbs</label>
          </div>
          <div className="categories-items">
            <input type="checkbox" id="itemfilter" name="itemfilter" value="Planters" />
            <label htmlFor="itemfilter"> Planters</label>
          </div>
          <p>Others </p>
        </div>
        <div className="pricerange">
          <h2>Price Range</h2>
          <div className="priceinputs">
            <input type="number" min="0.00" max="10000.00" step="0.01" placeholder="Min" />
            <input type="number" min="0.00" max="10000.00" step="0.01" placeholder="Max" />
          </div>
          <button type="button">Set Price</button>
        </div>
        <div className="rating">
          <h2>Rating</h2>
          <div>
            <div className="starbox">
              <input type="checkbox" id="ratefilter" name="ratefilter" checked />
              <AiFillStar className="stars" />
              <AiFillStar className="stars" />
              <AiFillStar className="stars" />
              <AiOutlineStar className="stars" />
              <p>above</p>
            </div>
          </div>
        </div>
        <div className="refferal">
          <h3>GET 30% OFF</h3>
          <p>share your refferal code and get discounted</p>
          <button type="button">Share</button>
        </div>

      </div>
      {children}
    </main>
  );
}

Sidebar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Sidebar;
