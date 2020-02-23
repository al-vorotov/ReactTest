import * as model from '../models/auth';
import * as API from '../api/auth';
import { Dispatch } from 'redux';
import { redirect } from 'redux-first-router';

export const auth = (email: string, password: string) => (dispatch: Dispatch<any>) => {
  dispatch({
    type: model.TypeKeys.AUTH_START,
  });
  API.auth(email, password)
    .then(({ token, ...userInformation }) => {
      dispatch({
        type: model.TypeKeys.AUTH_SUCCESS,
        payload: {
          token,
          userInformation,
        },
      });
      dispatch(
        redirect({
          type: 'HOME',
        }),
      );
    }).catch((error: Error) => {
    dispatch({
      type: model.TypeKeys.AUTH_ERROR,
      payload: {
        error: error.message,
      },
    });
  });
};

export const logout = () => (dispatch: Dispatch<any>) => {
  dispatch({
    type: model.TypeKeys.AUTH_LOGOUT,
  });

  dispatch(
    redirect({
      type: 'LOGIN',
    }),
  );
};

export const registrate = () => (dispatch: Dispatch<any>) => {
  dispatch(
    redirect({
      type: 'LOGIN',
    }),
  );
};

export const updateToken = (token: string) => (dispatch: Dispatch<any>) => {
  dispatch({
    type: model.TypeKeys.AUTH_UPDATE_TOKEN,
    payload: {
      token,
    },
  });
};

export const user = () => (dispatch: Dispatch<any>) => {
  dispatch(
    redirect({
      type: 'USER',
    }),
  );
};
