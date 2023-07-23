import React, { Dispatch } from 'react';
import { Action, LoginAction, State } from '@/Type';
import { isPassword, isValidEmail } from '@/Data/FormValidation';

type Props = {
  state: State;
  dispatch: Dispatch<Action>;
};

const View: React.FC<Props> = ({ state, dispatch }) => {
  const { login } = state;
  const { email, password } = login;
  const dispatchLogin = (action: LoginAction) => dispatch({ kind: 'Login', action });

  const validEmail = isValidEmail(email || '');
  const validPassword = isPassword(password || '');

  return (
    <div style={styles.container}>
      <h1>LOGIN</h1>
      <div style={styles.form}>
        <div style={styles.field}>
          <div style={styles.label}>Email</div>
          <input
            style={styles.input}
            onChange={(e) => dispatchLogin({ kind: 'ChangeUsername', value: e.target.value })}
            value={email || ''}
          />
          {email && !validEmail && <div style={styles.error}>Invalid email</div>}
        </div>
        <div style={styles.field}>
          <div style={styles.label}>Password</div>
          <input
            style={styles.input}
            type="password"
            onChange={(e) => dispatchLogin({ kind: 'ChangePassword', value: e.target.value })}
            value={password || ''}
          />
          {password && !validPassword && <div style={styles.error}>Password must have 6 characters</div>}
        </div>
        <div style={styles.buttonContainer}>
          <input
            type="button"
            style={styles.button}
            value="Submit"
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#F1F1F1',
  } as React.CSSProperties,
  form: {
    width: 500,
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    padding: 40,
    borderRadius: 20,
    background: '#FFFFFF',
  } as React.CSSProperties,
  field: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  } as React.CSSProperties,
  label: {
    fontSize: 20,
  } as React.CSSProperties,
  input: {
    padding: 10,
    border: '1px solid #cccccc',
  } as React.CSSProperties,
  error: {
    color: 'red',
  } as React.CSSProperties,
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
  } as React.CSSProperties,
  button: {
    padding: '10px 30px',
    border: '1px solid #cccccc',
  } as React.CSSProperties,
};

export default View;
