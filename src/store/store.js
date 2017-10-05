import { createStore } from 'redux';
import mainReducer from './reducers';

// const store = createStore(mainReducer, {
//   global: {
//     gameId: 1
//   },
//   game: {
//     selectedIds: []
//   },
//
// });

// export default store;
export default () => {
  const store = createStore(mainReducer, {
    global: {
      gameId: Math.random()
    },
    game: {
      selectedIds: []
    },

  });
  return store;
};
