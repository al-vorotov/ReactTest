import { combineReducers } from 'redux';
import { Location } from 'redux-first-router';
import { reducer as locationReducer } from './location';
import pageReducer from './page';
import authReducer from './auth';
import themeReducer from './theme';
import * as themeModel from '../models/theme';
import * as authModel from '../models/auth';

export interface RootState {
  auth: authModel.Store;
  location: Location;
  theme: themeModel.Store;
  page: {
    component: string;
    withSideBar: boolean;
  };
}

const rootReduser = combineReducers<RootState>({
  location: locationReducer,
  page: pageReducer,
  auth: authReducer,
  theme: themeReducer,
});

export default rootReduser;
