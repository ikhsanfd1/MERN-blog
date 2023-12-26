const initialState = {
  name: 'Ikhsan',
};

const globalReducer = (state = initialState, action) => {
  if (action.type === 'UPDATE_NAME') {
    return {
      ...state,
      name: 'Wow200',
    };
  }
  return state;
};

export default globalReducer;
