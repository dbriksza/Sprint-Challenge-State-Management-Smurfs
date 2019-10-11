import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchSmurfs } from "../actions/index";

import Smurf from "./smurf";

const SmurfInfo = props => {
  useEffect(() => {
    props.fetchSmurfs();
  }, []);

  if (props.isFetching) {
    return <h3>Populating the Village</h3>;
  }
  return (
    <div>
      {props.error && <p>{props.error}</p>}
      {props.smurfs.map(smurf => (
        <Smurf name={smurf.name} age={smurf.age} height={smurf.height} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    error: state.error
  };
};
export default connect(
  mapStateToProps,
  { fetchSmurfs }
)(SmurfInfo);
