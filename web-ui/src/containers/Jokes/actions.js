import { GET_ALL, DELETE, ADD, UPDATE, PUT, FILTER } from "./action-types";
import {
  addSuccessMessage,
  addPendingMessage,
  addFailureMessage
} from "../commons/data-loader/actions";
import {
  getAll as getJokesFromDB,
  deleteJoke as deleteJokeFromDb,
  putJoke as updateJokeInDB,
  postJoke as insertJokeInDb
} from "../../services/rest/jokes/";

const removeDeletedJokeFromState = joke => ({
  type: DELETE,
  payload: joke
});
const addFetchedJokesToState = jokes => ({
  type: GET_ALL,
  payload: jokes
});
const addOrUpdateJoke = joke => ({
  type: PUT,
  payload: joke
});
const updateJokeInState = joke => ({
  type: UPDATE,
  payload: joke
});
const addJokeInState = joke => ({
  type: ADD,
  payload: joke
});
const filterByCriteria = filter => ({
  type: FILTER,
  payload: filter
});

const addJoke = joke => {
  return dispatch => {
    dispatch(addPendingMessage("Fetching data"));
    insertJokeInDb(joke)
      .then(res => {
        dispatch(addJokeInState(joke));
        dispatch(addSuccessMessage("succesfully added  joke"));
      })
      .catch(err => {
        dispatch(addFailureMessage(err));
      });
  };
};

const updateJoke = joke => {
  return dispatch => {
    dispatch(addPendingMessage("Fetching data"));
    updateJokeInDB(joke)
      .then(res => {
        dispatch(updateJokeInState(joke));
        dispatch(addSuccessMessage("succesfully updated joke"));
      })
      .catch(err => {
        dispatch(addFailureMessage(err));
      });
  };
};

const deleteJoke = joke => {
  return dispatch => {
    dispatch(addPendingMessage());
    deleteJokeFromDb(joke)
      .then(res => {
        dispatch(removeDeletedJokeFromState(joke));
        dispatch(addSuccessMessage("succesfully deleted joke"));
      })
      .catch(err => {
        dispatch(addFailureMessage(err));
      });
  };
};

const fetchJokes = () => {
  return dispatch => {
    dispatch(addPendingMessage());
    getJokesFromDB()
      .then(res => {
        dispatch(addFetchedJokesToState(res));
        dispatch(addSuccessMessage("succesfully fetched jokes"));
      })
      .catch(err => {
        dispatch(addFailureMessage(err));
      });
  };
};

export {
  fetchJokes,
  deleteJoke,
  addOrUpdateJoke,
  updateJoke,
  addJoke,
  filterByCriteria
};
