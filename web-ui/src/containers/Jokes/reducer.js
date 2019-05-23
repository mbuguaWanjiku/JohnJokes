import { GET_ALL, DELETE,UPDATE,ADD,FILTER } from "./action-types";
import { array } from "../../utils";

const initialState = {
  jokes: []
};
const stateKey = "jokes";
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL:
      return {
        ...state,
        [stateKey]:  action.payload
      };

    case DELETE:
    return array.remove(state,stateKey,action.payload);

    case ADD:
    return array.add(state,stateKey,action.payload);

    case UPDATE:
    return array.update(state,stateKey,"punchline",action.payload);
  
    case FILTER:
  
    const criteria = action.payload.criteria;
    const value = action.payload.value;
    return array.filterByCreteria(state,stateKey,criteria,value);

    default:
      return state;
  }
};
