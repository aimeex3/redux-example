export default (state, action) => {
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
