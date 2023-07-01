import { BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom'
import { Helmet, HelmetProvider} from 'react-helmet-async';
import { Provider } from 'react-redux'
import store from './store'
import Routess from './Routes';

function App() {
  return (
    <HelmetProvider>
      <Helmet>
      {/*Aqui ponemos los metatags*/}
      </Helmet>

      <Provider store={store}>
          <Router>
            <Routess />
          </Router>
        </Provider>
    </HelmetProvider>
    
  );
}

export default App;
