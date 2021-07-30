import React, { useState,useEffect } from 'react';
import axios from 'axios'
import {useForm} from 'react-hook-form'
import Remove from './Remove';
 
const Feed=()=>{
    const {register,handleSubmit,formState: { errors }}=useForm();
    const [create,setCreate]=useState('flex')
    const [deleteCar,setDeleteCar]=useState('none')
    const [feedData,setUsers]=useState([]);

    useEffect(()=>{
        axios.get('http://localhost:9000/getusersid')
        .then(res=>setUsers(res.data.filter(v=>{
            return v._id===JSON.parse(localStorage.getItem('user'))
        })))
    },[])

    const addCar=async data=>{
        await axios.post('http://localhost:9000/create',data)
        .then(res=>console.log(res))
    }
    return(
        <div>
            <div className="break"></div>
            <div className="feed_header">
            {feedData.length===0?<h2>Go to your profile to add cars</h2>:
            feedData.map((v,i)=><div className="feed_info" key={i}>
                  <div className="create_delete">
                    <span onClick={()=>{
                        setCreate('flex')
                        setDeleteCar('none')
                    }}>1</span>
                    <span onClick={()=>{
                        setCreate('none')
                        setDeleteCar('flex')
                    }}>2</span>
                    </div>
                <span>{v.name} {v.surname}</span>
                </div>)}
                {feedData.length===0?"":
                <div className="flex_column">
                <form style={{display:create}} className="feed_car" onSubmit={handleSubmit(addCar)} enctype="multipart/form-data">
                 <input {...register("model",{required:true})} placeholder="Model" />
                 <input {...register("img",{required:true})} placeholder="Image" />
                 <input {...register("speed",{required:true})} placeholder="Speed" />
                 <button className="btn">Add</button>
                </form>
                <Remove display={{display:deleteCar}} />
                </div>
}
            </div>
        </div>
    )
}

export default Feed