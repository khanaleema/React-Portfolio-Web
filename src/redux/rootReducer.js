import { combineReducers } from 'redux';
// Import slices (features)
import userSlice from './features/userSlice';

const rootReducer = combineReducers({
  user: userSlice,
});

export default rootReducer;
