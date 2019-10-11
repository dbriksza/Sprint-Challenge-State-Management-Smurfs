import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useState } from "react";
import { postSmurfs } from "../actions/index";
import { fetchSmurfs } from "../actions/index";

import Smurf from "./smurf";

const SmurfInfo = props => {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [height, setHeight] = useState();
  useEffect(() => {
    props.fetchSmurfs();
  }, []);
  const handleName = e => {
    setName(e.target.value);
  };
  const handleAge = e => {
    setAge(e.target.value);
  };
  const handleHeight = e => {
    setHeight(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    props.postSmurfs(name, age, height);
    setName("");
    setAge("");
    setHeight("");
  };
  if (props.isFetching) {
    return <h3>Populating the Village</h3>;
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        Name:
        <input
          className="smurfname"
          type="text"
          name="name"
          value={name}
          onChange={handleName}
        />
        Age:
        <input
          className="smurfage"
          type="text"
          name="age"
          value={age}
          onChange={handleAge}
        />
        Height:
        <input
          className="smurfname"
          type="text"
          name="height"
          value={height}
          onChange={handleHeight}
        />
        <input type="submit" value="Submit" />
      </form>
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
    isPosting: state.isPosting,
    error: state.error
  };
};
const mapDispatchToProps = {
  fetchSmurfs,
  postSmurfs
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SmurfInfo);
