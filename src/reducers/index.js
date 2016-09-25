import { combineReducers } from 'redux';
import reducerPortfolio from './reducerPortfolio';

const rootReducer = combineReducers({
  portfolio: reducerPortfolio
});

export default rootReducer;
