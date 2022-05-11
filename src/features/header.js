import React from 'react';
import PropTypes from 'prop-types';
import './header.css';
import { AiOutlineHeart, AiOutlineShopping } from 'react-icons/ai';
import { FaLeaf } from 'react-icons/fa';
import { BsPersonCircle } from 'react-icons/bs';

function Header({ children }) {
  return (
    <main>
      <header className="App-header">
        <div className="headin_elem">
          <div className="topmost-head">
            <p>
              <FaLeaf className="topmost-head-inner" />
            </p>
            <h2>OYOTEE</h2>
          </div>
          <div className="insideA">
            <p>Shop</p>
            <p>PlantCare</p>
            <p>Workshops</p>
            <p>Blogs</p>
          </div>
          <div className="insideB">
            <AiOutlineShopping className="abcde" />
            <AiOutlineHeart className="abcde" />
            <BsPersonCircle className="abcde" />
          </div>
        </div>
      </header>
      {children}
    </main>
  );
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
