import * as model from '../models/theme';
import { Dispatch } from 'redux';

export const setTheme = (theme: model.Theme) => (dispatch: Dispatch<any>) => {
  dispatch({
    type: model.TypeKeys.THEME_SET,
    payload: {
      theme,
    },
  });
};

export const setDefaultTheme = () => (dispatch: Dispatch<any>) => {
  dispatch({
    type: model.TypeKeys.THEME_SET_DEFAULT,
  });
};
