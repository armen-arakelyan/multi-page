import {SUCCESS_IMAGE_GALLERY,ERROR_IMAGE_GALLERY,WAIT_IMAGE_GALLERY} from './actionTypes';
import {getImage} from './service';

export const imageRequest=(page=1)=>{
    return dispatch=>{
        dispatch(wait());
        getImage(`https://picsum.photos/v2/list?page=${page}&limit=10`)
        .then(res=>{
            dispatch(success(res.data))
        })
        .catch(err=>{
            dispatch(error(err))
        })
    function success(data){
        return{
            type:SUCCESS_IMAGE_GALLERY,
            payload:data
        }
    }
    function wait(){
        return{
            type:WAIT_IMAGE_GALLERY
        }
    }
    function error(err){
        return{
            type:ERROR_IMAGE_GALLERY,
            payload:err
        }
    }
}
}

