import { combineReducers } from 'redux'

import {reducer as jokes} from './containers/Jokes/reducer';

export default combineReducers({
  jokes:jokes
})