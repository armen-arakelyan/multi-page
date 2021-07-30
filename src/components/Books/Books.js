import React, { useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {imageRequest} from '../redux/imgGallery/action';
import {basketCounter,basketOrders,allCounts} from '../redux/basket/action';
import Cards from './Cards';
import Loader from './Loader';

const Books=()=>{
    const img=useSelector(state=>state.img);
    const page=useSelector(state=>state.img.page);
    const load=useSelector(state=>state.img.loader);
    const dispatch=useDispatch();

     useEffect(()=>{
         dispatch(imageRequest());
    },[dispatch])

    useEffect(()=>{
       window.onscroll=()=>{  
            let scrollheight=Math.ceil(window.innerHeight+window.document.documentElement.scrollTop);
            if (scrollheight===document.body.scrollHeight) {
                    dispatch(imageRequest(page))
              }
        }
        if(page===7){
            return window.onscroll=()=>{
                return false;
            }
        }
    },[page])
    return(
        <div className="photo_gallery">
            <div className="break"></div>
            <h1>Library Store</h1>
             {img.data.map((v,i)=>{
                 return <div key={i}>
                     <Cards name={v.author} img={v.download_url} price={+v.id+12} addBook={()=>{
                         dispatch(basketCounter(Number))
                         dispatch(basketOrders([{...Array,name:v.author,price:+v.id+12}]))
                         dispatch(allCounts(+v.id+12))
                     }} />
                      </div>           
            })
        }
        <Loader style={{display:load?'block':'none'}} />
        </div>
    )
}

export default Books;