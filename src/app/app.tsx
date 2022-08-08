import { Provider } from 'react-redux';

import { store } from './store';
import { AppRoutes } from './routing/routes';

export const App = () => {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
};
