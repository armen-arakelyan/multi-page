import {BASKET_COUNTER,BASKET_ORDERS,ALL_COUNTS,BASKET_ORDER_REMOVE,BASKET_COUNTER_REMOVE,BASKET_ALL_PRICE_REMOVE} from './actionType'

const initialState={
    counter:0,
    orders:[],
    all_count:0
}

const changeCount=(state=initialState,action)=>{
    switch(action.type){
        case BASKET_COUNTER:
            return{
                ...state,
                counter:state.counter+1
            }
        case BASKET_ORDERS:
            return{
                ...state,
                orders:[...state.orders,...action.payload]
            }
        case ALL_COUNTS:
            return{
                ...state,
                all_count:state.all_count+=action.payload
            }
        case BASKET_COUNTER_REMOVE:
            return{
                ...state,
                counter:state.counter-1
            }
        case BASKET_ORDER_REMOVE:
            return{
                ...state,
                orders:state.orders=[...state.orders].filter(v=>{
                    return v!==action.payload
                })
            }
        case BASKET_ALL_PRICE_REMOVE:
            return{
                ...state,
                all_count:state.all_count-=action.payload
            }
        default:
            return state;
    }
}

export default changeCount