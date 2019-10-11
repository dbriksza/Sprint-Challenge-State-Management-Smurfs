import {
  START_FETCHING,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  START_POSTING,
  POST_SUCCESS,
  POST_FAILURE
} from "../actions/index";

export const initialState = {
  smurfs: [],
  isFethching: false,
  isPosting: false,
  error: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCHING:
      return {
        ...state,
        isFetching: true,
        isPosting: false,
        error: ""
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isPosting: false,
        error: "",
        smurfs: action.payload
      };
    case FETCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        isPosting: false,
        error: action.payload
      };
    case START_POSTING:
      return {
        ...state,
        isPosting: true,
        isFethching: false,
        error: ""
      };
    case POST_SUCCESS:
      return {
        ...state,
        isPosting: false,
        isFethching: false,
        error: "",
        smurfs: [...state.smurfs, action.payload]
      };
    case POST_FAILURE:
      return {
        ...state,
        isPosting: false,
        isFethching: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
