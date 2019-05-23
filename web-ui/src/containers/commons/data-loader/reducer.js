import {addFailureMessage,addPendingMessage,addSuccessMessage} from './actions';

const initialState = {
  notifications:{
    success:[],
    failure:[],
    pending:[]
  }
};
export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO_STARTED:
      return {
        ...state,
        loading: true
      };
    case ADD_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        todos: [...state.todos, action.payload]
      };
    case ADD_TODO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
}