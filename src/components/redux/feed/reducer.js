import {FEED_DATA} from './actionType';

const initialState={
    data:[]
}

const feedData=(state=initialState,action)=>{
    switch(action.type){
        case FEED_DATA:
            return{
                ...state,
                data:[...state.data,...action.payload]
            }
        default:
            return state
    }  
}

export default feedData