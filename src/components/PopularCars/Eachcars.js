import React, { useEffect, useState } from "react";
import axios from "axios";

const Eachcars = ({ match }) => {
  const [carData, setCarData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:9000/cars/${match.params.id}`)
      .then((res) => setCarData((data) => [...data, res.data]));
  }, []);

  return (
    <div>
      <div className="break"></div>
      {carData.map((v, i) => (
        <div className="each_car" key={i}>
          <img src={v.img} />
          <span>
            <p>Model:{v.model}</p>
            <p>Speed:{v.speed}Km/h</p>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Eachcars;
