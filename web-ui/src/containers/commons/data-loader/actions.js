import { FAILURE, PENDING, SUCCESS } from "./action-types";

const addFailureMessage = message => ({
  type: FAILURE,
  payload: message
});
const addPendingMessage = message => ({
  type: PENDING,
  payload: message
});
const addSuccessMessage = message => ({
  type: SUCCESS,
  payload: message
});

export { addFailureMessage, addPendingMessage, addSuccessMessage };
