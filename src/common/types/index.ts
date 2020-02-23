export type Maybe<T> = T | null | undefined;

export interface InputWithValidation<T> {
  value: T;
  isValid: boolean;
}
