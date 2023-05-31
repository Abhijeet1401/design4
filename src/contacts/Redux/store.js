import {legacy_createStore as createStore} from 'redux';

import CombineReducer from './CombineReducer';

const store = createStore(CombineReducer);

export default store;
