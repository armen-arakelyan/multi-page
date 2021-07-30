import axios from "axios";
import React, { useEffect, useState } from "react";

const Cars = () => {
  const [carData, setCarData] = useState([]);
  const [carSpeed, setCarSpeed] = useState(false);

  const getCars = () => {
    axios.get("http://localhost:9000/cars").then((res) => setCarData(res.data));
  };

  useEffect(() => {
    getCars();
  }, []);

  useEffect(() => {
    if (carSpeed) {
      setCarSpeed(false);
    }
  });
  return (
    <div>
      <div className="break"></div>
      <div className="cars_cards">
        <h2>Top Cars</h2>
        <div className="cars_input">
          <input
            style={{
              backgroundImage: `url(${"https://img.icons8.com/metro/452/search.png"})`,
            }}
            placeholder="Choose your car"
            onChange={(e) => {
              if (e.target.value.length !== 0) {
                setCarData(
                  carData.filter((v) => {
                    return v.model
                      .toLowerCase()
                      .includes(e.target.value.toLowerCase());
                  })
                );
              } else {
                getCars();
              }
            }}
          />
          <div className="sorting_cars">
            <span
              onClick={() => {
                setCarData(
                  carData.sort((a, b) => {
                    return a.speed - b.speed;
                  })
                );
                setCarSpeed(true);
              }}
            >
              &#10145;
            </span>
            <span
              onClick={() => {
                setCarData(
                  carData.sort((a, b) => {
                    return b.speed - a.speed;
                  })
                );
                setCarSpeed(true);
              }}
            >
              &#10145;
            </span>
          </div>
        </div>
        {carData.map((v, i) => (
          <a
            key={i}
            href={`/car/${v._id}`}
            style={{ backgroundImage: `url(${v.img})` }}
            className="cars_cards_content"
          >
            <div className="model_speed">
              <p>Model:{v.model}</p>
              <p>Speed:{v.speed}Km/h</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Cars;
