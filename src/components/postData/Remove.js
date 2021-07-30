import React,{ useEffect, useState,useRef } from 'react';
import axios from 'axios'
import {useForm} from 'react-hook-form'

const Remove=(props)=>{
    const {register,handleSubmit}=useForm();
    const [cars,setCars]=useState([]);
    const [update,setUpdate]=useState(false);
    let carRef=useRef(null)

    const removeCar=(data)=>{
        axios.post('http://localhost:9000/car_delete',data)
        .then(res=>console.log(res.data))
        setUpdate(!update)
    }
    const getCar=()=>{
        axios.get('http://localhost:9000/cars')
        .then(res=>setCars(res.data))
    }

    useEffect(()=>{
        getCar()
        console.log(cars)
    },[])

    useEffect(()=>{
        if(update){
            getCar()
            setUpdate(!update)
        }
    })

    return(
        <form style={props.display} className="feed_car_remove" onSubmit={handleSubmit(removeCar)}>
        <table>
            <thead>
                <tr>
                <th>Model</th>
                <th>Delete</th>
                </tr>
            </thead>
            <tbody>
           
            {cars.map((v,i)=><tr key={i}>
                <td>{v.model}</td>
                <td><button type="submit" className="btn">&#10006;</button>
                {/* <input type="text" {...register("myid")} defaultValue={v._id}  /> */}
              
                <select onClick={(e)=>console.log(e.target.value)} name="myid" value={v._id}>
                    {cars.map(a=><option value={a._id}></option>)}                             
                </select> 
                <button type="submit" formAction="http://localhost:9000/car_delete" >Delete</button>   
                      
               
                </td>
            </tr>)}
            
            </tbody>
        </table>
    </form>
    )
}

export default Remove