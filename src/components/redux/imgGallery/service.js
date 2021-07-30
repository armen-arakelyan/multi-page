import axios from 'axios';

export const getImage=(url)=>{
    return(axios.get(url))
}