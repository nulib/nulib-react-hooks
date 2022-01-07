import React from "react";
import ReactDOM from "react-dom";
import UseMediaExample from "./useMedia/UseMedia.example";

/**
 * Example of a pattern of how and when to test hooks:
 * https://kentcdodds.com/blog/how-to-test-custom-react-hooks
 */

const App: React.FC = () => {
  return (
    <div>
      <UseMediaExample />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
