import React from "react";
import { HashRouter, Route } from "react-router-dom";
import App from "../App";
import Hook from "../hook/index";
import D3 from "../d3/index";
import ImagePickerExample from "../antd/index";
import "antd-mobile/dist/antd-mobile.css";

const BasicRoute = () => (
  <HashRouter>
    <Route exact path="/" component={App} />
    <Route exact path="/hook" component={Hook} />
    <Route exact path="/d3" component={D3} />
    <Route exact path="/antd" component={ImagePickerExample} />
  </HashRouter>
);

export default BasicRoute;
