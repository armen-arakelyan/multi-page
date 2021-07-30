import {BASKET_COUNTER,BASKET_ORDERS,ALL_COUNTS,BASKET_ORDER_REMOVE,BASKET_COUNTER_REMOVE,BASKET_ALL_PRICE_REMOVE} from './actionType'

export const basketCounter=count=>{
    return{
        type:BASKET_COUNTER,
        payload:count
    }
}
export const basketOrders=orders=>{
    return{
        type:BASKET_ORDERS,
        payload:orders
    }
}
export const allCounts=count=>{
    return{
        type:ALL_COUNTS,
        payload:count
    }
}
export const basketCounterRemove=countremove=>{
    return{
        type:BASKET_COUNTER_REMOVE,
        payload:countremove
    }
}
export const basketOrderRemove=orderremove=>{
    return{
        type:BASKET_ORDER_REMOVE,
        payload:orderremove
    }
}
export const basketAllPriceRemove=price=>{
    return{
        type:BASKET_ALL_PRICE_REMOVE,
        payload:price
    }
}