import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'

const Cards=(props)=>{
    useEffect(()=>{
        AOS.init({
            duration:500
        })
    },[])
    return(
         <div className="gallery">
                <div data-aos={props.aos} className="gallery_content">
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