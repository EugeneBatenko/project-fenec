import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
//Styles
import '../scss/main.scss';
//Pages
import MainPage from "./pages/MainPage/MainPage";
import Cv from "./pages/CV/Cv";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/CV" component={Cv} />
        </Router>
      </div>
    );
  }
}

export default App;
