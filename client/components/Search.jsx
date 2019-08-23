import React, { Component } from "react";
import * as actions from "../actions/actions.js";
import { connect } from "react-redux";

const mapStateToProps = store => ({
  input: store.reducers.input,
  category: store.reducers.category
});

const mapDispatchToProps = dispatch => {
  // create functions that will dispatch action creators
  //key: () => dispatch(actionCreator)
  return {
    setInput: searchInput => dispatch(actions.setInput(searchInput)),
    changeCategory: category => dispatch(actions.changeCategory(category)),
    setRecs: recs => dispatch(actions.setRecommendations(recs))
  };
};

class Search extends Component {
  constructor(props) {
    super(props);
    this.searchSimilar = this.searchSimilar.bind(this);
  }

  searchSimilar() {
    const { category, input } = this.props;
    //console.log("cat", category);
    fetch(`/search/?category=${category}&input=${input}`)
      .then(res => {
        //console.log('front',res);
        return res.json();
      })
      .then(response => { this.props.setRecs(response.recs);
        console.log(response);
      })
      .catch(err => console.log("Search has failed", err));
  }

  render() {
    console.log(this.props);
    return (
      <div className ="searchInput">
        <form className ="searchInput">
          <input
            id="search"
            placeholder="Search for..."
            ref={input => (this.search = input)}
            onChange={event => {
              this.props.setInput(event.target.value);
              console.log(event.target.value);
            }}
          />
          <input
          id="searchButton"
            type="submit"
            value="Submit"
            onClick={e => {
              e.preventDefault();
              this.searchSimilar();
            }}
          />
          {/* preventDefault(prevents the page from being reloaded onClick) */}
          {/* <p>{this.state.query}</p> */}
        </form>
        <h5>Select Category:</h5>
        <select
        id = "category"
          name="type"
          form="search"
          //value={"this.state.value"}
          onChange={event => {
            this.props.changeCategory(event.target.value);
            console.log(event.target.value);
          }}
        >
          <option value="movie">Movies</option>
          <option value="music">Music</option>
          <option value="book">Books</option>
          <option value="podcast">Podcasts</option>
        </select>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
