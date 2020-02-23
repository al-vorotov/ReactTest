import { Store, A, TypeKeys } from '../models/auth';

const intialState: Store = {
  token: null,
  userInformation: null,
  error: null,
  isLoading: false,
};

export default (state: Store = intialState, action: A) => {
  const { type, payload } = action;

  switch (type) {
    case TypeKeys.AUTH_START: {
      return { ...state, isLoading: true };
    }
    case TypeKeys.AUTH_ERROR: {
      const { error } = { ...state, ...payload };
      return { ...state, isLoading: false, error };
    }
    case TypeKeys.AUTH_SUCCESS: {
      const { token, userInformation } = { ...state, ...payload };
      return { ...state, isLoading: false, error: null, token, userInformation };
    }
    case TypeKeys.AUTH_LOGOUT: {
      return intialState;
    }
    case TypeKeys.AUTH_UPDATE_TOKEN: {
      const { token } = { ...state, ...payload };
      return { ...state, token };
    }
    default:
      return state;
  }
};
