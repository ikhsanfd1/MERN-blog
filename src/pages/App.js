import { Provider } from 'react-redux';
import { AppRoutes, store } from '../config';
import './globals.css';

function App() {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
}

export default App;
