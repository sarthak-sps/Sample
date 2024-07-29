
import { combineReducers,createStore} from 'redux'
import cartReducer from './reducer';
const reducer = combineReducers({
    cartReducer: cartReducer,
  });

  const store = createStore(reducer);

export default store;
