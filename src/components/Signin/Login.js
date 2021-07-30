import React,{useState} from 'react';
import axios from 'axios';
import {useForm} from 'react-hook-form';
import {useDispatch,useSelector} from 'react-redux';
import {feedToPage} from '../redux/feed/action';

const Login=(props)=>{
    const dispatch=useDispatch();

    const {register,handleSubmit,formState:{errors}}=useForm();
    const Feed=async data=>{
       await axios.post('http://localhost:9000/feed',data)
        .then(res=>{
            dispatch(feedToPage(res.data));
            res.data.map(v=>{
                localStorage.setItem('user',JSON.stringify(v._id))
            })
            window.location.reload()
        })
    }
    return(
        <form className="inputs_block" style={props.display} onSubmit={handleSubmit(Feed)}>
        <br />
        <input {...register("mail",{required:true})} placeholder="Mail" type="email" />
        <input {...register("password",{required:true})} placeholder="Password" type="password" />
        <br />
        <button onClick={props.click} type="submit" style={{width:"120px"}} className="btn">Login</button>
    </form>
    )
}

export default Login