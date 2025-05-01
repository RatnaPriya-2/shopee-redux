const MODE_CHANGE = "mode/modechange";

export const changeMode = (toggleBoolean) => {
  return { type: MODE_CHANGE, payload: toggleBoolean };
};

const modeReducer = (state = true, action) => {
  if (action.type === MODE_CHANGE) {
    return action.payload;
  }

  return state;
};
export default modeReducer;
