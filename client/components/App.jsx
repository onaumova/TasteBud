import React, {Component} from 'react';
import Search from './Search.jsx';
import Recommendations from './Recommendations.jsx'


class App extends Component {
    render () {
        return (
            <div>
            <div className="container">
          <h2>Search Similar to</h2>
          </div>
          <Search/>
          <div>
            <Recommendations/>
          </div>
        </div>
        );
    }
}

export default App;