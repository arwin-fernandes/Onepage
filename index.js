import React from "react";
import ReactDOM from "react-dom";

import Form1 from "./Form1";
import List from "./List";
import Form from "./Form";
import Threecolumn from "./Threecolumn";

ReactDOM.render(
  <>
    <List />
    <Form />
    <Threecolumn />
    <Form1 />
  </>,

  document.getElementById("root")
);
