import { Store, A, TypeKeys } from '../models/theme';

const initialState: Store = {
  theme: 'theme_1',
};

export default function(state: Store = initialState, action: A) {
  const { type, payload } = action;

  switch (type) {
    case TypeKeys.THEME_SET: {
      const { theme } = payload ? payload : initialState;
      return { theme };
    }
    case TypeKeys.THEME_SET_DEFAULT: {
      return initialState;
    }
    default:
      return state;
  }
}
