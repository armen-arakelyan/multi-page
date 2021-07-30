import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Myform from "../Signin/Form";
import Basket from "../Navbar/Basket";
import axios from "axios";

const Form = () => {
  const count = useSelector((state) => state.count.counter);
  const feed = useSelector((state) => state.feed.data);
  const [menu, setMenu] = useState("-5000px");
  const [basket, setBasket] = useState("none");
  const [isHome, setIsHome] = useState(false);
  const [isWeather, setIsWeather] = useState(false);
  const [isBooks, setIsBooks] = useState(false);
  const [isCars, setIsCars] = useState(false);
  const [isGame,setIsGame]=useState(false);
  const [isChat,setIsChat]=useState(false);
  const [isRegister, setIsRegister] = useState("none");
  const [users, setUsers] = useState(null);
  const history = useHistory();

  const redirect = () => {
    history.push("/feed");
  };

  useEffect(() => {
    axios.get("http://localhost:9000/getusersid").then((res) =>
      setUsers(
        res.data.filter((v) => {
          return v._id === JSON.parse(localStorage.getItem("user"));
        })
      )
    );
  }, []);

  useEffect(() => {
    if (localStorage.getItem("user") === null) {
      setUsers(null);
    }
  });
  return (
    <div>
      <nav className="mynav">
        <div className="logo">
          <Link
            onClick={() => {
              setIsHome(true);
              setIsWeather(false);
              setIsBooks(false);
              setIsGame(false)
              setIsCars(false);
              setIsChat(false)
            }}
            to="/"
            exact="true"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
              alt="img"
            />
          </Link>
        </div>
        <div className="nav-links">
          {isHome ? (
            <Link to="/" className="active_header" exact="true">
              <img src="https://www.freepnglogos.com/uploads/logo-home-png/chimney-home-icon-transparent-1.png" />
              <p>Home</p>
            </Link>
          ) : (
            <Link
              to="/"
              onClick={() => {
                setIsHome(true);
                setIsWeather(false);
                setIsBooks(false);
                setIsCars(false);
                setIsGame(false);
                setIsChat(false)
              }}
              exact="true"
            >
              <img src="https://www.freepnglogos.com/uploads/logo-home-png/chimney-home-icon-transparent-1.png" />
            </Link>
          )}
          {isCars ? (
            <Link to="/cars" className="active_header">
              <img src="https://image.flaticon.com/icons/png/512/89/89102.png" />
              <p>Cars</p>
            </Link>
          ) : (
            <Link
              to="/cars"
              onClick={() => {
                setIsHome(false);
                setIsWeather(false);
                setIsBooks(false);
                setIsCars(true);
                setIsGame(false)
                setIsChat(false)
              }}
            >
              <img src="https://image.flaticon.com/icons/png/512/89/89102.png" />
            </Link>
          )}
          {isGame ? (
            <Link to="/game" className="active_header">
              <img src="https://image.flaticon.com/icons/png/512/3076/3076839.png" />
              <p>Game</p>
            </Link>
          ) : (
            <Link
              to="/game"
              onClick={() => {
                setIsHome(false);
                setIsWeather(false);
                setIsBooks(false);
                setIsCars(false);
                setIsGame(true)
                setIsChat(false)
              }}
            >
              <img src="https://image.flaticon.com/icons/png/512/3076/3076839.png" />
            </Link>
          )}
              {isChat ? (
            <Link to="/chat" className="active_header">
              <img src="https://image.flaticon.com/icons/png/512/892/892228.png" />
              <p>Chat</p>
            </Link>
          ) : (
            <Link
              to="/chat"
              onClick={() => {
                setIsHome(false);
                setIsWeather(false);
                setIsBooks(false);
                setIsCars(false);
                setIsGame(false);
                setIsChat(true)
              }}
            >
              <img src="https://image.flaticon.com/icons/png/512/892/892228.png" />
            </Link>
          )}
          {isBooks ? (
            <Link to="/books" className="active_header">
              <img src="https://image.flaticon.com/icons/png/512/29/29302.png" />
              <p>Books</p>
            </Link>
          ) : (
            <Link
              to="/books"
              onClick={() => {
                setIsHome(false);
                setIsWeather(false);
                setIsBooks(true);
                setIsCars(false);
                setIsGame(false)
                setIsChat(false)
              }}
            >
              <img src="https://image.flaticon.com/icons/png/512/29/29302.png" />
            </Link>
          )}
          {isWeather ? (
            <Link to="/weather" className="active_header">
              <img src="https://image.flaticon.com/icons/png/512/1146/1146930.png" />
              <p>Weather</p>
            </Link>
          ) : (
            <Link
              to="/weather"
              onClick={() => {
                setIsHome(false);
                setIsWeather(true);
                setIsBooks(false);
                setIsCars(false);
                setIsGame(false)
                setIsChat(false)
              }}
            >
              <img src="https://image.flaticon.com/icons/png/512/1146/1146930.png" />
            </Link>
          )}
          {users === null ? (
            feed.length === 0 ? (
              <a
                onClick={() => {
                  setIsRegister("block");
                }}
              >
                <img src="https://image.flaticon.com/icons/png/512/2089/2089700.png" />
              </a>
            ) : (
              ""
            )
          ) : (
            ""
          )}
          <div onClick={() => setBasket("flex")} className="basket">
            <span>{count}</span>
            <img
              src="https://png.pngtree.com/png-vector/20191026/ourlarge/pngtree-shopping-basket-icon-png-image_1871519.jpg"
              alt="basket"
            />
          </div>
        </div>
        {users === null
          ? ""
          : users.map((v, i) => (
              <span onClick={() => {
                redirect();
                setIsHome(false);
                setIsWeather(false);
                setIsBooks(false);
                setIsCars(false);
                setIsGame(false)
                setIsChat(false)
              }} className="feed_menu" key={i}>
                <img src="https://image.flaticon.com/icons/png/512/3135/3135715.png" />
                <p>
                  {v.name} {v.surname}
                </p>
              </span>
            ))}
        {users === null ? (
          ""
        ) : (
          <a
            href="/"
            onClick={() => {
              localStorage.removeItem("user");
            }}
            style={{fontFamily: '-webkit-pictograph'}}
          >
            Logout
          </a>
        )}
      </nav>
      {feed.length === 0 ? (
        <div style={{ display: isRegister }}>
          <Myform
            close={() => {
              setIsRegister("none");
            }}
          />
        </div>
      ) : (
        ""
      )}
      <nav className="hamburger">
        <div className="hamburger-content">
          <span
            onClick={() => {
              setMenu("0px");
            }}
          >
            &#9776;
          </span>
          <div className="hamburger_logo">
            <Link to="/" exact>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                alt="img"
              />
            </Link>
          </div>
          <div onClick={() => setBasket("flex")} className="basket">
            <span>{count}</span>
            <img
              src="https://png.pngtree.com/png-vector/20191026/ourlarge/pngtree-shopping-basket-icon-png-image_1871519.jpg"
              alt="basket"
            />
          </div>
        </div>
        <div style={{ left: menu }} className="modal">
          <div className="close_modal" onClick={() => setMenu("-5000px")}>
            &#10006;
          </div>
          <div className="modal_content_menu">
            <a>
              {users === null ? (
                <span
                  onClick={() => {
                    setIsRegister("block");
                    setMenu("-5000px");
                  }}
                >
                  <img src="https://image.flaticon.com/icons/png/512/2089/2089700.png" />
                  Sign in
                </span>
              ) : (
                users.map((v, i) => (
                  <span className="feed" key={i}>
                    <p
                      onClick={() => {
                        redirect();
                        setMenu("-5000px");
                      }}
                      style={{    display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'}}
                    >
                       <img style={{width: '60px',
    height: '50px'}} src="https://image.flaticon.com/icons/png/512/3135/3135715.png" />
                      {v.name} {v.surname}
                    </p>
                    {users === null ? (
                      ""
                    ) : (
                      <div className="logout">
                        <span
                          onClick={() => {
                            localStorage.removeItem("user");
                            window.location.reload();
                          }}
                        >
                          Logout
                        </span>
                      </div>
                    )}
                  </span>
                ))
              )}
            </a>
            <Link to="/">
              {isHome ? (
                <span className="active_header_mobile">
                  <img
                    src="https://www.freepnglogos.com/uploads/logo-home-png/chimney-home-icon-transparent-1.png"
                    alt="home"
                  />
                  Home
                </span>
              ) : (
                <span
                  onClick={() => {
                    setIsHome(true);
                    setIsWeather(false);
                    setIsGame(false)
                    setIsBooks(false);
                    setIsCars(false)
                    setIsChat(false)
                    setMenu("-5000px");
                  }}
                >
                  <img
                    src="https://www.freepnglogos.com/uploads/logo-home-png/chimney-home-icon-transparent-1.png"
                    alt="home"
                  />
                  Home
                </span>
              )}
            </Link>
            <Link to="/cars">
              {isCars ? (
                <span className="active_header_mobile">
                  <img
                    src="https://image.flaticon.com/icons/png/512/89/89102.png"
                    alt="cars"
                  />
                  Cars
                </span>
              ) : (
                <span
                  onClick={() => {
                    setIsHome(false);
                    setIsWeather(false);
                    setIsBooks(false);
                    setIsGame(false)
                    setIsCars(true)
                    setIsChat(false)
                    setMenu("-5000px");
                  }}
                >
                  <img
                    src="https://image.flaticon.com/icons/png/512/89/89102.png"
                    alt="cars"
                  />
                  Cars
                </span>
              )}
            </Link>
            <Link to="/game">
              {isGame ? (
                <span className="active_header_mobile">
                  <img
                    src="https://image.flaticon.com/icons/png/512/3076/3076839.png"
                    alt="game"
                  />
                  Game
                </span>
              ) : (
                <span
                  onClick={() => {
                    setIsHome(false);
                    setIsWeather(false);
                    setIsBooks(false);
                    setIsGame(true)
                    setIsCars(false)
                    setIsChat(false)
                    setMenu("-5000px");
                  }}
                >
                  <img
                    src="https://image.flaticon.com/icons/png/512/3076/3076839.png"
                    alt="game"
                  />
                  Game
                </span>
              )}
            </Link>
            <Link to="/chat">
              {isChat ? (
                <span className="active_header_mobile">
                  <img
                    src="https://image.flaticon.com/icons/png/512/892/892228.png"
                    alt="chat"
                  />
                  Chat
                </span>
              ) : (
                <span
                  onClick={() => {
                    setIsHome(false);
                    setIsWeather(false);
                    setIsBooks(false);
                    setIsGame(false)
                    setIsCars(false)
                    setIsChat(true)
                    setMenu("-5000px");
                  }}
                >
                  <img
                    src="https://image.flaticon.com/icons/png/512/892/892228.png"
                    alt="chat"
                  />
                  Chat
                </span>
              )}
            </Link>
            <Link to="/books">
              {isBooks ? (
                <span className="active_header_mobile">
                  <img src="https://image.flaticon.com/icons/png/512/29/29302.png" />
                  Books
                </span>
              ) : (
                <span
                  onClick={() => {
                    setIsHome(false);
                    setIsWeather(false);
                    setIsBooks(true);
                    setIsGame(false)
                    setIsCars(false)
                    setIsChat(false)
                    setMenu("-5000px");
                  }}
                >
                  <img src="https://image.flaticon.com/icons/png/512/29/29302.png" />
                  Books
                </span>
              )}
            </Link>
            <Link to="/weather">
              {isWeather ? (
                <span className="active_header_mobile">
                  <img src="https://image.flaticon.com/icons/png/512/1146/1146930.png" />
                  Weather
                </span>
              ) : (
                <span
                  onClick={() => {
                    setIsHome(false);
                    setIsWeather(true);
                    setIsBooks(false);
                    setIsGame(false)
                    setIsCars(false)
                    setIsChat(false)
                    setMenu("-5000px");
                  }}
                >
                  <img src="https://image.flaticon.com/icons/png/512/1146/1146930.png" />
                  Weather
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>
      <Basket close={() => setBasket("none")} display={basket} />
    </div>
  );
};

export default Form;
