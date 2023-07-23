import React, { Dispatch } from 'react';
import { Action, State } from '@/Type';
import Login from '@/Pages/Login';

type Props = {
  state: State;
  dispatch: Dispatch<Action>;
};

const View: React.FC<Props> = ({ state, dispatch }) => {
  if (state.authState != null) {
    return <>{state.authState.userID}</>;
  } else {
    return (
      <Login
        state={state}
        dispatch={dispatch}
      />
    );
  }
};

export default View;
