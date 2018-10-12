import { createActions } from 'reduxsauce';

export const { Creators, Types } = createActions({
    modifyInput: ['input'],
    displayOutput: [''],
    clearDisplay: ['']
});