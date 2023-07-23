import React, { useReducer } from 'react';
import { initState, update } from '@/State';
import Layout from '@/View/Layout';

const App: React.FC = () => {
  const [state, dispatch] = useReducer(update, initState());
  return (
    <Layout
      state={state}
      dispatch={dispatch}
    />
  );
};

export default App;
