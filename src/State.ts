import { Action, LoginAction, LoginState, State } from '@/Type';

export function initState(): State {
  return {
    login: { email: null, password: null },
    authState: null,
  };
}

export function update(state: State, action: Action): State {
  switch (action.kind) {
    case 'Login':
      return { ...state, login: updateLogin(state.login, action.action) };
  }
}

export function updateLogin(login: LoginState, action: LoginAction): LoginState {
  switch (action.kind) {
    case 'ChangeUsername':
      return { ...login, email: action.value };
    case 'ChangePassword':
      return { ...login, password: action.value };
  }
}
