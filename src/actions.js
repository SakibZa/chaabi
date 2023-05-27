export const startTyping = () => {
    return {
      type: 'START_TYPING'
    };
  };
  
  export const stopTyping = () => {
    return {
      type: 'STOP_TYPING'
    };
  };
  
  export const keyPress = (key) => {
    return {
      type: 'KEY_PRESS',
      payload: key
    };
  };
  
  export const reset = () => {
    return {
      type: 'RESET'
    };
  };
  