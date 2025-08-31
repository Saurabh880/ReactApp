import React from "react";
import ReactDOM from "react-dom/client";

/*
Nested element

<div id="parent">
  <div id="child">
    <h1>I'm a h1 tag</h1>
  </div>
</div>

ReactElement(object) -> becomes html that browser understands
*/
//React.createElement => ReactElement - Js object => HTMLELemenet(render)
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I'm a H1 tag")
  )
);
/*
Nested element

<div id="parent">
  <div id="child">
    <h1>I'm a h1 tag</h1>
    <h2>I'm a h2 tag</h2>
  </div>
</div>

ReactElement(object) -> becomes html that browser understands
*/

//children defined in array
const parent2 = React.createElement(
  "div",
  { id: "parent2" },
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm a H1 tag"),
    React.createElement("h2", {}, "I'm a H2 tag"),
  ])
);

/*
Nested element

<div id="parent">
  <div id="child">
    <h1>I'm a h1 tag</h1>
    <h2>I'm a h2 tag</h2>
  </div>
  <div id="child2">
    <h1>I'm a h1 tag</h1>
    <h2>I'm a h2 tag</h2>
  </div>
</div>

ReactElement(object) -> becomes html that browser understands
*/
const parent3 = React.createElement("div", { id: "parent2" }, [
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm a H1 tag"),
    React.createElement("h2", {}, "I'm a H2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm a H1 tag"),
    React.createElement("h2", {}, "I'm a H2 tag"),
  ]),
]);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello Html from React"
);
// the {} is the place where you give Ids eg : id = "heading"

//Everything that we will render will be inside root.
const root = ReactDOM.createRoot(document.getElementById("root"));
//nested elements
//console.log(parent);
//root.render(parent);

//multiple children
//root.render(parent2);

//multiple nested div
root.render(parent3);
