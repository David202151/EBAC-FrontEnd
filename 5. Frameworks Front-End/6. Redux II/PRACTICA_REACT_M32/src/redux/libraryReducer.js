const InitialState = [];

const libraryReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "ADD_SONG":
        return [...state, action.payload]
    case "REMOVE_SONG": 
        return state.filter((song) => song.id !== action.payload);
    default:
        return state;
  }
};

export default libraryReducer;

