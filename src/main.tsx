import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './functions/store';
import Routes from './functions/routes';
import { createRoot } from 'react-dom/client'
createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
    <Routes/>
    </BrowserRouter>
  </Provider>
)
