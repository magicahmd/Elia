import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import DroosiHeader from "./components/layout/DroosiHeader";
import DroosiFooter from "./components/layout/DroosiFooter";
import Home from "./pages/Home";
import CourseRequest from "./pages/CourseRequest";
import Profile from "./pages/Profile";
import CreateRequest from "./pages/CreateRequest";
import "./fonts.css";
import ESFF2018 from "./pages/ESFF2018";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <DroosiHeader />
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/submit" component={CreateRequest} />
          <Route path="/request/:id" component={CourseRequest} />
          <Route path="/ESFF2018" component={ESFF2018} />
          <DroosiFooter />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
