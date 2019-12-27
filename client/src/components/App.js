import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const pageOne = () => {
  return (
    <div>
      Page 1<Link to="/pagetwo">To Page 2</Link>
    </div>
  );
};

const pageTwo = () => {
  return (
    <div>
      Page 2<Link to="/">To Page 1</Link>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={pageOne} />
          <Route path="/pagetwo" component={pageTwo} />
        </div>
      </BrowserRouter>{" "}
    </div>
  );
};

export default App;
