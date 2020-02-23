import { Store as ReduxStore, createStore as reduxCreateStore, applyMiddleware, compose, Middleware } from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';
import rootReducer, { RootState } from './reducers/index';
import { middleware as routerMiddleware, enhancer as routerEnhancer } from './reducers/location';
import { throttle } from 'lodash';
import { Maybe } from '../common/types';
import { Theme } from './models/theme';

type ThunkAction2<R> = ThunkAction<R, RootState, void>;
export type ThunkActionCreator<R> = (...args: any[]) => ThunkAction2<R>;
export type Store = ReduxStore<RootState>;

const middlewares = applyMiddleware(thunk, routerMiddleware);
let token: Maybe<string> = null;
let selectedTheme: Maybe<Theme> = null;

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state: Partial<RootState>) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch {
    // ignore write errors
  }
};

const persistedState = loadState();

if (persistedState && persistedState.auth && persistedState.auth.token) {
  token = persistedState.auth.token;
}

if (persistedState && persistedState.theme && persistedState.theme.theme) {
  selectedTheme = persistedState.theme.theme;
}

const store: Store = reduxCreateStore<RootState>(
  rootReducer,
  persistedState,
  compose(
    routerEnhancer,
    middlewares,
  ),
);

store.subscribe(
  throttle(() => {
    const auth = store.getState().auth;
    const theme = store.getState().theme;
    if (token !== auth.token || selectedTheme !== theme.theme) {
      saveState({
        auth,
        theme,
      });
    }
  }, 100),
);

export default store;
