import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import DroosiHeader from "./components/layout/DroosiHeader";
import DroosiFooter from "./components/layout/DroosiFooter";
import Home from "./pages/Home";
import CourseRequest from "./pages/CourseRequest";
import Profile from "./pages/Profile";
import CreateRequest from "./pages/CreateRequest";
import ESFF2018 from "./pages/ESFF2018";
import Login from "./pages/Login";
import Submissions2019 from "./pages/Submissions2019";
import Partners from "./pages/Partners";
import ESFFTEAM from "./pages/ESFFTEAM/Index";
import "./fonts.css";
import Submissions2020 from "./pages/Submissions2020";
import Movie2020 from "./pages/Submissions2020/Movie2020";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <DroosiHeader />
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
          <Route path="/submit" component={CreateRequest} />
          <Route path="/submissions/2019" component={Submissions2019} />
          <Route exact path="/submissions/2020" component={Submissions2020} />
          <Route exact path="/submissions/2020/:movie_id" component={Movie2020} />
          <Route path="/request/:id" component={CourseRequest} />
          <Route path="/ESFF2018" component={ESFF2018} />
          <Route path="/ESFFTEAM" component={ESFFTEAM} />
          <Route path="/Partners" component={Partners} />
          <DroosiFooter />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
