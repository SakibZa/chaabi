const initialState = {
    isTyping: false,
    keyCount: 0,
    correctCount: 0,
    accuracy: 100,
    currentKey: ''
  };
  
  const reducers = (state = initialState, action) => {
    switch (action.type) {
      case 'START_TYPING':
        return {
          ...state,
          isTyping: true
        };
      case 'STOP_TYPING':
        return {
          ...state,
          isTyping: false
        };
        case 'KEY_PRESS':
  const { payload } = action;
  const isCorrect = payload === state.currentKey;
  const newKeyCount = state.keyCount + 1;
  const newCorrectCount = isCorrect ? state.correctCount + 1 : state.correctCount;
  const newAccuracy = (newCorrectCount / newKeyCount) * 100;

  return {
    ...state,
    keyCount: newKeyCount,
    correctCount: newCorrectCount,
    accuracy: newAccuracy,
    currentKey: payload
  };
      case 'RESET':
        return initialState;
      default:
        return state;
    }
  };
  
  export default reducers;