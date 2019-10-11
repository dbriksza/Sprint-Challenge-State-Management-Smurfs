import axios from "axios";

export const START_FETCHING = "START_FETCHING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const START_POSTING = "START_POSTING";
export const POST_SUCCESS = "POST_SUCCESS";
export const POST_FAILURE = "POST_FAILURE";

export const fetchSmurfs = () => dispatch => {
  axios
    .get("http://localhost:3333/smurfs")
    .then(response => dispatch({ type: FETCH_SUCCESS, payload: response.data }))
    .catch(error => dispatch({ type: FETCH_FAILURE, payload: error }));
};
export const postSmurfs = (name, age, height) => dispatch => {
  axios
    .post("http://localhost:3333/smurfs", {
      name: name,
      age: age,
      height: height
      //   id: 0
    })
    .then(
      response => console.log(response),
      dispatch({
        type: POST_SUCCESS,
        payload: { name: name, age: age, height: height }
      })
    )
    .catch(error => dispatch({ type: POST_FAILURE, payload: error }));
};
