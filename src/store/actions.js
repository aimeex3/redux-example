export const resetGame = () => ({
  type: 'RESET_GAME'
});

export const selectId = (id) => {
  return {
    type: 'SELECT_ID',
    id
  };
};
