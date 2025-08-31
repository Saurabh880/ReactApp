import React from "react";
import ReactDOM from "react-dom/client";

//React element
//JSX => React.createElement =>React Element( JS object) -> becomes html that browser understands
//Babel is a JS compiler which converts JSX to JS code
const jsxHeading = <h1 id="heading">Namaste React using JSX 📉</h1>;
const jsxHeadingClass = <h1 className="heading">Namaste React using JSX 📉</h1>;
// use () to wrap JSX for multiline JS
const Title = () => (
  <h1 className="heading" id="heading">
    Title - Namaste React using JSX 📉
  </h1>
);

//React functional component
const HeadingComponent = () => {
  return (
    <div id="container">
      {Title()} {/*   calling as function */}
      <h1 className="heading" id="heading">
        Namaste React using functional component 📉
      </h1>
    </div>
  );
};

const HeadingComponent2 = () => {
  return (
    <h1 className="heading" id="heading">
      Namaste React using functional component 2 📉
    </h1>
  );
};

const DivComponent = () => (
  <div>
    <HeadingComponent />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
//rendering React element to the root
root.render(<HeadingComponent />);
root.render(<DivComponent />);

//roor.render();
