import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = store => ({
  recs: store.reducers.recs
});

class Recommendations extends Component {
  constructor(props) {
      super(props);
      this.addToDb = this.addToDb.bind(this);
    }

  addToDb(rec) {
      console.log('rec request',rec)
    fetch("/db/add", {
        method : 'POST',
        body: JSON.stringify(rec),
        headers: {'Content-Type': 'application/json'}
    }).catch(err => console.log(err))
    // .then(res => {
    //   console.log('front',res);
    //   return res.json();
    // });
  }

  render() {
    let recList = [];
    let recs = this.props.recs;
    //console.log("here", recs);
    for (let i = 0; i < recs.length; i++) {
      recList.push(
        <div key={i} className="recs">
          {recs[i].Name}
          <button
            key={i + "btn"}
            id='add'
            onClick={ e => {
            //   e.preventDefault();
              this.addToDb(recs[i]);
              window.location.reload()
            }}
          >
            +
          </button>
        </div>
      );
      console.log(recs[i]);
      //console.log('list',recList)
    }
    return (
      <div id= "recsBox" className ='recs'>
        <h3>Tasty Recommendations:</h3>
        {recList}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  null
)(Recommendations);
