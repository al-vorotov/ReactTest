import { Action } from 'redux';

export enum TypeKeys {
  THEME_SET = 'THEME_SET',
  THEME_SET_DEFAULT = 'THEME_SET_DEFAULT',
}

export type Theme = 'theme_1' | 'theme_2';

export interface Store {
  theme: Theme;
}

export interface ActionSetThemePayload {
  theme: Theme;
}

export interface A extends Action {
  payload?: ActionSetThemePayload;
}

export interface ThemeItem {
  theme: Theme;
  color: string;
}

export const themeArray: ThemeItem[] = [
  {
    theme: 'theme_1',
    color: '#02b9b5',
  },
  {
    theme: 'theme_2',
    color: '#1d02b9',
  },
];
