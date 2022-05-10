import React from "react";
import PropTypes from 'prop-types';
import './content.css'


const InnerContent = () => {
  return (
         <>
    <main>
    <div className='right-content'>
           <div>
           <input  type="text" placeholder='Min'></input>
           <p>Search resultr for "Monstreat"</p>

           <div>
                <button type="button">Relevance</button>
                <button type="button">Poular</button>
                <button type="button">Most New</button>
                <button type="button">Price</button>
           </div>
           <div>
                <div>
                  <button type="button">Relevance</button>
                    <img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600"></img>
                      <p>Monstret DK VAR(L)</p>
                      <p> # # # # # (85)</p>
                      <div>
                          <p>price</p>
                          <button type="button">Add to Cart</button>
                      </div>
                      </div>
                </div>
           </div>
           </div>

           <div>

           </div>

      {/* {children} */}
    </main>
    </>
  )
};


InnerContent.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
  export default InnerContent;
  