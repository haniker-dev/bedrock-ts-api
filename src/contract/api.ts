import { User } from 'contract/user';

export type LoginParam = { email: string; password: string };
export type LoginResponse = User;
export const loginError = {
  INVALID_PARAM: 'Invalid param',
};
