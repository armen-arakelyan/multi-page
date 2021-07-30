import React from 'react';

const Cards=(props)=>{
    return(
         <div className="gallery">
                <div className="gallery_content">
                <img src={props.img} alt="img" />
                <div className="gallery_content_price">
                   <span>{props.name}</span>
                    <span>Price:{props.price}$</span>
                    <button onClick={props.addBook}>Add to Basket</button>
                    </div>
                </div>
    </div>
    )
}
export default Cards;