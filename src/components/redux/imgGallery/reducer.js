import {SUCCESS_IMAGE_GALLERY,ERROR_IMAGE_GALLERY,WAIT_IMAGE_GALLERY} from './actionTypes';

const my_state={
    loader:false,
    page:1,
    error:"",
    data:[]
}

const reduce=(state=my_state,action)=>{
    switch(action.type){
        case SUCCESS_IMAGE_GALLERY:
        return{
            ...state,
            loader:false,
            page:state.page+1,
            data:[...state.data,...action.payload]
        }
        case WAIT_IMAGE_GALLERY:
            return{
                ...state,
                loader:true
            }
        case ERROR_IMAGE_GALLERY:
            return{
                ...state,
                error:action.payload,
                loader:true                
            }
        default:
            return{...state}
    }
}
export default reduce;