import { createStore, applyMiddleware, compose } from 'redux'
import appReducer from '../reducers' 
// export { default as apiMiddleWare } from './apiMiddleWare';
import ReduxThunk from 'redux-thunk'

export default () => {
  const appStore = createStore(
    appReducer,
    applyMiddleware(ReduxThunk)
  );
  return appStore
}