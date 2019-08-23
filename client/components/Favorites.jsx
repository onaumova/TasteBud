import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actions.js";

const mapStateToProps = store => ({
  favs: store.reducers.favs
});

const mapDispatchToProps = dispatch => {
  return {
    setFavs: favs => dispatch(actions.setFavorites(favs))
  };
};

class Favorites extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    return fetch("/db")
      .then(res => {
        console.log("front", res);
        return res.json();
      })
      .then(response => {
        return response.tastes.map(elem => elem.Name);
      })
      .then(favs => this.props.setFavs(favs))
      .catch(err => console.log("Search has failed", err));
  }
  render() {
    let favsList = [];
    let favsArray = this.props.favs;
    //console.log("wtf", this.props.favs);
    for (let i = 0; i < favsArray.length; i++) {
      favsList.push(
        <div key={i + "fav"} className="favs">
          {favsArray[i]}
          <button
            key={i + "b"}
            id ='add'
            onClick={e => {
              e.preventDefault();
              //this.addToDb(recs[i]);
            }}
          >
            -
          </button>
        </div>
      );
    }
    console.log("list", favsList);
    return (
      <div id='favs'>
        <h3>Save for Dessert:</h3>
        {favsList}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites);
