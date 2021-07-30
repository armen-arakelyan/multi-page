import React from 'react';
import axios from 'axios'
import {useForm} from 'react-hook-form'

const RegisterForm=(props)=>{
    const {register,handleSubmit,formState:{errors}}=useForm();
    const Reg=regData=>{
        axios.post('http://localhost:9000/register',regData)
        .then(res=>console.log(res))
    }
    return(
        <form className="inputs_block" style={props.display} onSubmit={handleSubmit(Reg)}>
            <input {...register("name",{required:true})} placeholder="Name"/>
            <input {...register("surname",{required:true})} placeholder="Surname"/>
        <input {...register("regmail",{required:true})} type="email" placeholder="Mail"/>
        <input {...register("regpassword",{required:true})} type="password" placeholder="Password"/>
        <br />        
        <button type="submit" className="btn" style={{width:"120px"}}>Register</button>
            </form>
    )
}

export default RegisterForm