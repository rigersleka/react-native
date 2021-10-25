
import {combineReducers} from 'redux';
import cartReducer from '../reducers/cart.reducer'

export const rootReducer = combineReducers({
    cart: cartReducer,
  });