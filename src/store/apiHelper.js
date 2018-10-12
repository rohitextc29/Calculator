import {Creators} from './actions';

export const modifyInput = (input) => {
  return (dispatch) => {
    const modifyInputAction = Creators.modifyInput;
    const displayOutputAction = Creators.displayOutput;
    if(input === '='){
        return dispatch(displayOutputAction());
    }
    return dispatch(modifyInputAction(input));
  }
}

export const clearDisplay = () => {
    return (dispatch) => {
        const clearDisplayAction = Creators.clearDisplay;
        return dispatch(clearDisplayAction());
      }
}