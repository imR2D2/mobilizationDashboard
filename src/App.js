import { BrowserRouter as Router} from 'react-router-dom'
import { Helmet, HelmetProvider} from 'react-helmet-async';
import { Provider } from 'react-redux'
import store from './store'
import Routess from './Routes';
import Navbar from './components/home/Navbar';

function App() {
  return (
    <HelmetProvider>
      <Helmet>
      {/*Aqui ponemos los metatags*/}
      </Helmet>

      <Provider store={store}>
          
          <Router>
            <Navbar />
            <Routess />
          </Router>
        </Provider>
    </HelmetProvider>
    
  );
}

export default App;
