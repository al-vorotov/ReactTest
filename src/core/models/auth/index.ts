import { Action } from 'redux';
import { Maybe } from '../../../common/types';

export enum TypeKeys {
  AUTH_START = 'AUTH_START',
  AUTH_ERROR = 'AUTH_ERROR',
  AUTH_SUCCESS = 'AUTH_SUCCESS',
  AUTH_LOGOUT = 'AUTH_LOGOUT',
  AUTH_UPDATE_TOKEN = 'AUTH_UPDATE_TOKEN',
}

export interface ActionSuccessLogin {
  type: TypeKeys.AUTH_SUCCESS;
  payload: {
    token: string;
    userInformation: UserInformation;
  };
}

interface SuccessLoginPayload {
  token: string;
  userInformation: UserInformation;
}

export interface ActionErrorLogin {
  type: TypeKeys.AUTH_ERROR;
  payload: {
    error: string;
  };
}

interface ErrorLoginPayload {
  error: string;
}

export interface ActionUpdateToken {
  type: TypeKeys.AUTH_ERROR;
  payload: {
    token: string;
  };
}
interface UpdateTokenPayload {
  token: string;
}
export interface ActionOther {
  type: TypeKeys;
}

export interface A extends Action {
  payload?: UpdateTokenPayload | ErrorLoginPayload | SuccessLoginPayload;
}

export type Role = 'user' | 'admin' | 'superadmin';

export interface Store {
  token: Maybe<string>;
  userInformation: Maybe<UserInformation>;
  error: Maybe<string>;
  isLoading: boolean;
}

export interface UserInformation {
  email: string;
  role: Role;
  firstName: string;
  secondName: string;
}

export interface SuccessResponse {
  token: string;
  email: string;
  role: string;
  firstName: string;
  secondName: string;
}
