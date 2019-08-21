import React, { Component } from "react";
import { Picker } from "react";

class Search extends Component {
  // state = {
  // query: '',
  //  }
  //  handleInputChange = () => {
  //    this.setState({
  //      query: this.search.value
  //    })
  //  }
  searchSimilar () {
    fetch('/search/?meow=dsfgdsfghdfhdgh&cats=356')
    .then (res => {res.json(); console.log(res)})
    .catch (err => console.log('Search has failed', err));
  }

  render() {
    return (
      <div>
        <form>
          <input
            id="search"
            placeholder="Search for..."
            ref={input => (this.search = input)}
            onChange={this.handleInputChange}
          />
          <input type="submit" value="Submit" onClick= {this.searchSimilar} />
          {/* <p>{this.state.query}</p> */}
        </form>
        <h5>Select Category:</h5>
        <select
          name="type"
          form="search"
          // value={"this.state.value"}
          // onChange={"this.handleChange"}
        >
          <option value="movie">Movies</option>
          <option value="band">Music</option>
          <option value="book">Books</option>
          <option value="podcast">Podcasts</option>
        </select>
      </div>
    );
  }
}

export default Search;
