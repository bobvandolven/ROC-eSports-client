const path = require("path");
import "./main.sass";
import React from "react";
import ReactDOM from "react-dom";
import img from "./assets/NodeJS-Wallpaper.jpg";

const element = <img src={img}></img>
ReactDOM.render(element, document.getElementById("react-container"));