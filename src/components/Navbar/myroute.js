import React from "react";
import Home from "../Home/Home";
import Menu from "./menu";
import Weather from "../Weather/Weather";
import Books from "../Books/Books";
import Order from "../Order";
import Feed from "../postData/Feed";
import Cars from "../PopularCars/Cars";
import Eachcars from "../PopularCars/Eachcars";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Game from '../Game/Game'
import Chat from '../Chat/chat'


const Myroute = () => {
  return (
    <Router>
      <Menu />
      <Route path="/" component={Home} exact />
      <Route path="/weather" component={Weather} />
      <Route path="/books" component={Books} />
      <Route path={`/car/:id`} component={Eachcars} />
      <Route path="/cars" component={Cars} />
      <Route path="/order" component={Order} />
      <Route path="/feed" component={Feed} />
      <Route path="/game" component={Game} />
      <Route path="/chat" component={Chat} />
    </Router>
  );
};

export default Myroute;
