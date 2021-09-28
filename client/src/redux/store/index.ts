import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import Reducers from '../reducer';


const store = createStore(Reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
