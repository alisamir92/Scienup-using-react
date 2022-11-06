import React from 'react';
import {Link} from "react-router-dom"

export default function Item(props) {
  return (
    <>  
        <div className="item" >
            <div style={{"backgroundImage": `url(${props.item.photo})`}}></div>
            <span className="sale-span">Sale!</span>
            <button className="details-button"><Link to="/item" state= {{item: props.item}}>DETAIL</Link></button>
            <button className="add-button"><a href="#">ADD TO CART</a></button>
        </div>
        <div className="item-desc"><a href="#">{props.item.product}</a></div>
        {props.item.priceBefore?<del>{props.item.priceBefore}</del>:<del></del>}
        <span className="price">{props.item.priceAfter}</span>
    </>
  )
}
