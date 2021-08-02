import React,{ useEffect, useState } from 'react';
import axios from 'axios'
import {useForm} from 'react-hook-form'

const Remove=(props)=>{
    const {register,handleSubmit}=useForm();
    const [cars,setCars]=useState([]);
    const [update,setUpdate]=useState(false);

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
                <td>
                <input style={{display:'none'}} type="text" {...register("myid")} defaultValue={v._id}  />
                    <button type="submit" className="btn">&#10006;</button>             
                </td>
            </tr>)}
            
            </tbody>
        </table>
    </form>
    )
}

export default Remove