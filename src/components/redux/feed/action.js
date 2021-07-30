import {FEED_DATA} from './actionType';

export const feedToPage=data=>{
    return{
        type:FEED_DATA,
        payload:data
    }
}