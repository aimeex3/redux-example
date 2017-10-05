import {combineReducers} from 'redux';

const global = (state = {}, action) => {
  console.log(action);
  switch (action.type) {
    case 'RESET_GAME':
      return {
        ...state, // need to copy the state because need to be immutable
        gameId: state.gameId + 1,
      };
    default:
      return state;
  }
};

//should be in another file probably
const game = (state = {}, action) => {
  switch (action.type) {
    case 'SELECT_ID':
      return {
        ...state,
        selectedIds: [...state.selectedIds, action.id]
      };
    default:
      return state;
  }
};

export default combineReducers({global, game});
