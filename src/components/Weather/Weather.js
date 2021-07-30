import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Weather_5 from './Weather_5';

const API_key='c99310bdd9ba9b28343d7e17bff4dab0';

const Weather=()=>{
    const [data,setData]=useState([]);

    useEffect(()=>{
        axios.get(`http://api.openweathermap.org/data/2.5/weather?id=524901&lang=fr&appid=${API_key}`)
        .then(res=>setData([res.data]))
    },[data.length!==0])

    return(
        <div className="weather">
            <div className="break"></div>
            <div className="weathers_header">
            <div className="current_weather">
            {data.map((v,i)=><div key={i} style={{backgroundImage:v.main==="Rain"?`url('https://i.pinimg.com/originals/fe/ce/3e/fece3ea5b0d3ddb60f0226d291bcd036.gif')`:"url('https://thumbs.gfycat.com/ActualRapidAdouri-size_restricted.gif')"}} className="weather_content" >
                <h2>Погода сейчас</h2>
                <p>{v.name}</p>
                <b>{Math.round(v.main.temp - 273)}&deg;</b>
                <span className="wind">
                     <p>Скорость ветра:{v.wind.speed}км/ч</p>
                 </span>
                 <Weather_5 />
             </div>
            )}
            </div>
            </div>
        </div>
    )
}

export default Weather