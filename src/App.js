import React, { useState } from "react";
import ReactDOM from "react-dom";
import Map from "./Map";
import Popup from './Popup';

import "./styles.css";

const data = [
  {
    name: "Osaka",
    title: "Osaka",
    date: "2022-01-20",
    lat: 35.03291,
    lng: 135.76308,
    id: 1
  },
  
  {
    name: "Sendai",
    title: "Sendai",
    date: "2022-01-5",
    lat: 38.31574,
    lng: 140.83224,
    id: 2
  }, 

  {
    name: "Fukuoka",
    title: "Fukuoka",
    date: "2022-02-10",
    lat: 33.61993,
    lng: 130.38203,
    id: 3
  }

];


function App() {
  return <Map places={data} center={{ lat: 36.80001, lng: 139.02712 }} />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;


