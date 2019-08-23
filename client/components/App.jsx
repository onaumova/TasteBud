import React, { Component } from "react";
import Search from "./Search.jsx";
import Recommendations from "./Recommendations.jsx";
import Favorites from "./Favorites.jsx";

class App extends Component {
  render() {
    return (
      <div className= 'mainContainer'> 
        <div className="leftContainer">
          <div className="searchContainer">
            <br></br>
            <h2>Search Similar to</h2>
            <br></br>
          <Search />
          <br></br>
            <Recommendations />
          </div>
        </div>
        <div className="rightContainer">
          <div className= 'favsContainer'>
            <Favorites />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
