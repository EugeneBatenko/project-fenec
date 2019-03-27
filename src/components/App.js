import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
//Styles
import '../scss/main.scss';
import MainPage from "./pages/MainPage/MainPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={MainPage} />
        </Router>
      </div>
    );
  }
}

export default App;
