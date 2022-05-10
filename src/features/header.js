import React  from "react";
import PropTypes from 'prop-types';
import './header.css'

const Header = ({ children }) => (
    <main>
      <header className="App-header">
        <div className="headin_elem">
          <h1>OYOTEE</h1>
           <div className="insideA">
              <p>Shop</p>
              <p>PlantCare</p>
              <p>Workshops</p>
              <p>Blogs</p>
           </div>
           <div className="insideB">
             <p>a</p>
             <p>b</p>
             <p>c</p>
           </div>
        </div>
      </header>
      {children}
    </main>
  );


  Header.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
  export default Header;
  