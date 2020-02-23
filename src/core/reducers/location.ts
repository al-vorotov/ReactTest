import { Dispatch } from 'redux';
import { connectRoutes, StateGetter, redirect } from 'redux-first-router';
import { RootState } from './index';

const unAuthProtect = (dispatch: Dispatch<any>, getState: StateGetter<RootState>) => {
  const { auth } = getState();

  if (auth.token) {
    dispatch(
      redirect({
        type: 'HOME',
      }),
    );
  }
};

const routesMap = {
  HOME: {
    path: '/',
    thunk: unAuthProtect,
  },
};

const { reducer, middleware, enhancer } = connectRoutes(routesMap);

export { reducer, middleware, enhancer };
