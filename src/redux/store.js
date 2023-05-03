import { createStore, compose, applyMiddleware } from 'redux';
import { loadState, saveState } from './local-storage';
import thunk from 'redux-thunk';
import axios from 'axios';
// import throttle from 'lodash/throttle';
import * as api from '../config';
import { rootReducer } from './root-reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const configureStore = () => {
  const persistedState = loadState();

  const store = createStore(
    rootReducer,
    persistedState,
    composeEnhancers(
      applyMiddleware(
        thunk.withExtraArgument({
          client: axios,
          api,
        }),
      ),
    ),
  );

  store.subscribe(() => {
    saveState(store.getState()); //need to set items
  });

  return store;
};
