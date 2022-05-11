import React from "react";
import PropTypes from 'prop-types';
import './rightcontent.css'
import { AiFillDribbbleCircle } from 'react-icons/ai';
import { AiTwotoneEdit } from 'react-icons/ai';
import { AiTwotoneHeart } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';


const InnerContent = () => {
  return (
         <>
    <main>
    <div className='right-content'>
           <div className="left-inner-div">
                <input  type="text" placeholder='Min'>
                </input>
                <p>Search results for "Monstreat"</p>
                <div className="left-inner-div-sort">
                    <p><strong>Sort</strong></p>
                        <button className="first-btn" type="button">Relevance</button>
                        <button type="button">Popular</button>
                        <button type="button">Most New</button>
                        <button type="button">Price</button>
                </div>
                <div className="container">
                    <div className="left-inner-div-items">
                        <div className="containerbtn">
                          <button type="button">
                          <AiTwotoneHeart className="abc" />
                          </button>
                        </div>
                        <div className="picdiv">
                        </div>
                        <h3>Monstret DK VAR(L)</h3>
                        <div className="starbox"> 
                            <AiFillStar className="stars"/>
                            <AiFillStar className="stars"/>
                            <AiFillStar className="stars"/>
                            <AiFillStar className="stars"/>
                            <AiOutlineStar className="stars"/>
                            <p>(135)</p>
                        </div>
                        <div className="containerfooter">
                            <div>
                              <p>price</p>
                              <p><strong>$25</strong></p>
                            </div>
                            <button type="button">Add to Cart</button>
                        </div>
                    </div>
                    <div className="left-inner-div-items">
                        <div className="containerbtn">
                          <button type="button">
                          <AiOutlineHeart className="abcd" />
                          </button>
                        </div>
                        <div className="picdiv">
                        </div>
                        <h3>Monstret DK VAR(L)</h3>
                        <div className="starbox"> 
                            <AiFillStar className="stars"/>
                            <AiFillStar className="stars"/>
                            <AiFillStar className="stars"/>
                            <AiFillStar className="stars"/>
                            <AiOutlineStar className="stars"/>
                            <p>(135)</p>
                        </div>
                        <div className="containerfooter">
                            <div>
                              <p>price</p>
                              <p><strong>$25</strong></p>
                            </div>
                            <button type="button">Add to Cart</button>
                        </div>
                    </div>
                    <div className="left-inner-div-items">
                        <div className="containerbtn">
                          <button type="button">
                          <AiOutlineHeart className="abcd" />
                          </button>
                        </div>
                        <div className="picdiv">
                        </div>
                        <h3>Monstret DK VAR(L)</h3>
                        <div className="starbox"> 
                            <AiFillStar className="stars"/>
                            <AiFillStar className="stars"/>
                            <AiFillStar className="stars"/>
                            <AiFillStar className="stars"/>
                            <AiOutlineStar className="stars"/>
                            <p>(135)</p>
                        </div>
                        <div className="containerfooter">
                            <div>
                              <p>price</p>
                              <p><strong>$25</strong></p>
                            </div>
                            <button type="button">Add to Cart</button>
                        </div>
                    </div>
                    <div className="left-inner-div-items">
                        <div className="containerbtn">
                          <button type="button">
                          <AiOutlineHeart className="abcd" />
                          </button>
                        </div>
                        <div className="picdiv">
                        </div>
                        <h3>Monstret DK VAR(L)</h3>
                        <div className="starbox"> 
                            <AiFillStar className="stars"/>
                            <AiFillStar className="stars"/>
                            <AiFillStar className="stars"/>
                            <AiFillStar className="stars"/>
                            <AiOutlineStar className="stars"/>
                            <p>(135)</p>
                        </div>
                        <div className="containerfooter">
                            <div>
                              <p>price</p>
                              <p><strong>$25</strong></p>
                            </div>
                            <button type="button">Add to Cart</button>
                        </div>
                    </div>
                    <div className="left-inner-div-items">
                        <div className="containerbtn">
                          <button type="button">
                          <AiOutlineHeart className="abcd" />
                          </button>
                        </div>
                        <div className="picdiv">
                        </div>
                        <h3>Monstret DK VAR(L)</h3>
                        <div className="starbox"> 
                            <AiFillStar className="stars"/>
                            <AiFillStar className="stars"/>
                            <AiFillStar className="stars"/>
                            <AiFillStar className="stars"/>
                            <AiOutlineStar className="stars"/>
                            <p>(135)</p>
                        </div>
                        <div className="containerfooter">
                            <div>
                              <p>price</p>
                              <p><strong>$25</strong></p>
                            </div>
                            <button type="button">Add to Cart</button>
                        </div>
                    </div>
                    <div className="left-inner-div-items">
                        <div className="containerbtn">
                          <button type="button">
                          <AiOutlineHeart className="abcd" />
                          </button>
                        </div>
                        <div className="picdiv">
                        </div>
                        <h3>Monstret DK VAR(L)</h3>
                        <div className="starbox"> 
                            <AiFillStar className="stars"/>
                            <AiFillStar className="stars"/>
                            <AiFillStar className="stars"/>
                            <AiFillStar className="stars"/>
                            <AiOutlineStar className="stars"/>
                            <p>(135)</p>
                        </div>
                        <div className="containerfooter">
                            <div>
                              <p>price</p>
                              <p><strong>$25</strong></p>
                            </div>
                            <button type="button">Add to Cart</button>
                        </div>
                    </div>    
                </div>
           </div>
           <div className="right-inner-div">
                <div className="containerbtn">
                    <button type="button">X</button>
                </div>
                <div className="picdiv2">
                 </div>
                <div className="right-inner-div-pics">
                    <AiFillDribbbleCircle className="right-inner-div-pics-items"/>
                    <AiFillDribbbleCircle className="right-inner-div-pics-items"/>
                    <AiFillDribbbleCircle className="right-inner-div-pics-items"/>
                    <AiFillDribbbleCircle className="right-inner-div-pics-items"/>
                </div>
                <h2>Montessera Delociosa Variegats(Large)</h2>
                <p>lorem isul dolor amet lorem ipsum lorot amet orem isul dolor amet lorem ipsum lorot amet
                lorem isul dolor amet lorem ipsum lorot amet orem isul dolor amet lorem ipsum lorot amet Read more ...
                </p>
                <div className="right-inner-div-details">
                    <h3>Details</h3>
                    <h3>Reviews(32)</h3>
                </div>
                <div className="right-inner-div-inner-section">
                    <div className="right-inner-div-inner-inner-section">
                         <AiTwotoneEdit />
                        <p>120 cm</p>
                    </div>
                    <div className="right-inner-div-inner-inner-section">
                        <AiTwotoneEdit />
                        <p>Animal Save</p>
                    </div>
                </div>
                <div className="right-inner-div-btm-btns">
                    <button  className="right-inner-div-btm-btns-a" type="button">
                        <AiTwotoneHeart className="abc" />
                    </button>
                    <button  className="right-inner-div-btm-btns-b" type="button">$25 - Add to cart</button>
                </div>
           </div>
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
  