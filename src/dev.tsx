import React from "react";
import ReactDOM from "react-dom";
import Yo from "./components/UseMedia";

const App: React.FC = () => {
  return (
    <div>
      <Yo />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
