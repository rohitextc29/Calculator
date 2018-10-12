
import {
    createReducer
  } from 'reduxsauce';
  import { Types } from '../store/actions';
  import { calculate } from '../utils/calculate.js';
  
  export const INITIAL_STATE = {
    displayValue: '',
  }
  
  export const modifyInput = (state = INITIAL_STATE, action) => {
    var { input } = action;
    var { displayValue } = state;
    input = displayValue + '' + input;
    return {
      ...state,
      displayValue: input
    }
  }
  
  export const displayOutput = (state = INITIAL_STATE, action) => {
    var output = calculate(state.displayValue);
    return {
      ...state,
      displayValue: output
    }
  }

  export const clearDisplay = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        displayValue: ''
    }
  }
  
  export const HANDLERS = {
    [Types.MODIFY_INPUT]: modifyInput,
    [Types.DISPLAY_OUTPUT]: displayOutput,
    [Types.CLEAR_DISPLAY]: clearDisplay
  }
  
  export default createReducer(INITIAL_STATE, HANDLERS)
  