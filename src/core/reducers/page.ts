import { NOT_FOUND } from 'redux-first-router';

export const components = {
  HOME: {
    component: 'Home',
    withSideBar: true,
  },
  COUNTER: { component: 'Counter', withSideBar: true },
  [NOT_FOUND]: {
    component: 'Home',
    withSideBar: false,
  },
};

export default (state = 'HOME', action = { type: NOT_FOUND }) => components[action.type] || state;
