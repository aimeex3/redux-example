import { createStore } from 'redux';
import mainReducer from './reducers';

const store = createStore(mainReducer, {
  gameId: 1,
});

export default store;
