import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_key='c99310bdd9ba9b28343d7e17bff4dab0';

const Weather_5 = () =>{
    const [data,setData]=useState([]);
    const [data_1,setData_1]=useState([]);
    const [data_2,setData_2]=useState([]);
    const [data_3,setData_3]=useState([]);
    const [data_4,setData_4]=useState([]);
    const [data_5,setData_5]=useState([]);
    const [left,setLeft]=useState(0);

    const getData=()=>{
         axios.get(`http://api.openweathermap.org/data/2.5/forecast?id=524901&lang=zh_cn&appid=${API_key}`)
        .then(res=>{
                setData([res.data.list]
                    )
    })
                    for (let i = 0; i < data.length; i++) {
                        for (let j = 0; j < 8; j++) {
                            setData_1(data_1=>[...data_1,data[i][j]])
                        }
                    }
                    for (let i = 0; i < data.length; i++) {
                        for (let j = 8; j < 16; j++) {
                            setData_2(data_2=>[...data_2,data[i][j]])
                        }
                    }
                    for (let i = 0; i < data.length; i++) {
                        for (let j = 16; j < 24; j++) {
                            setData_3(data_3=>[...data_3,data[i][j]])
                        }
                    }
                    for (let i = 0; i < data.length; i++) {
                        for (let j = 24; j < 32; j++) {
                            setData_4(data_4=>[...data_4,data[i][j]])
                        }
                    }
                    for (let i = 0; i < data.length; i++) {
                        for (let j = 32; j < 40; j++) {
                            setData_5(data_5=>[...data_5,data[i][j]])
                        }
                    }
    }
    useEffect(()=>{
            getData();
            if(data.length===40){
                return false
            }
    },[data.length!==0])
    return(
        <div className="weather_cards">
           <div className="weather_card_header">
           <div className="weather_left-right">
                 <div className="weather_left">
                 <span onClick={()=>{
              if(left===0){
                setLeft(0)
              }else{
                setLeft(left+290)
              }
           }}>&#10096;</span>
                 </div>
                 <div className="weather_right">
                 <span onClick={()=>{
                if(left===-7540){
                    setLeft(0)
                }else{
                    setLeft(left-290)
                }
           }}>&#10097;</span>
                 </div>
           </div>
           <div style={{left:left}} className="weather_card_border">
           {data_1.map((v,i)=><div className="weather_content_5" key={i}>
               <em>Первый</em>
               <em>День</em>
           {v.weather.map(v=>
               <img src={`http://openweathermap.org/img/w/${v.icon}.png`} alt="weather" />
           )}
           <p>{v.dt_txt.slice(11,-3)}</p>
           <b>{Math.round(v.main.temp - 273)}&deg;</b>
                    <span>Скорость ветра:{v.wind.speed}</span>
           </div>)}
           {data_2.map((v,i)=><div className="weather_content_5" key={i}>
           <em>Второй</em>
            <em>День</em>
           {v.weather.map(v=>
               <img src={`http://openweathermap.org/img/w/${v.icon}.png`} alt="weather" />
           )}
          <p>{v.dt_txt.slice(11,-3)}</p>
           <b>{Math.round(v.main.temp - 273)}&deg;</b>
                    <span>Скорость ветра:{v.wind.speed}</span>
           </div>)}
           {data_3.map((v,i)=><div className="weather_content_5" key={i}>
           <em>Третий</em>
           <em>День</em>
           {v.weather.map(v=>
               <img src={`http://openweathermap.org/img/w/${v.icon}.png`} alt="weather" />
           )}
           <p>{v.dt_txt.slice(11,-3)}</p>
           <b>{Math.round(v.main.temp - 273)}&deg;</b>
           <span>Скорость ветра:{v.wind.speed}</span>
           </div>)}
           {data_4.map((v,i)=><div className="weather_content_5" key={i}>
           <em>Четвёртый</em>
            <em>День</em>
           {v.weather.map(v=>
               <img src={`http://openweathermap.org/img/w/${v.icon}.png`} alt="weather" />
           )}
          <p>{v.dt_txt.slice(11,-3)}</p>
           <b>{Math.round(v.main.temp - 273)}&deg;</b>
           <span>Скорость ветра:{v.wind.speed}</span>
           </div>)}
           {data_5.map((v,i)=><div className="weather_content_5" key={i}>
           <em>Пятый</em>
           <em>День</em>
           {v.weather.map(v=>
               <img src={`http://openweathermap.org/img/w/${v.icon}.png`} alt="weather" />
           )}
          <p>{v.dt_txt.slice(11,-3)}</p>
           <b>{Math.round(v.main.temp - 273)}&deg;</b>
           <span>Скорость ветра:{v.wind.speed}</span>
           </div>)}
           </div>
           </div>  
          </div>
    )
}

export default Weather_5;