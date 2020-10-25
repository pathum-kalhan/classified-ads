

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from '../src/store'

import {  ThemeProvider } from '@material-ui/core/styles';
import {lightTheme} from './styles/main'

import NavBar from './components/common/NavBar';
import Drawer from './components/common/Drawer';

// import pages
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import { Provider } from 'react-redux';
function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
    <Router>
      <div className='App'>
        <NavBar />
        <Drawer/>
      </div>
      <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/favorites' exact component={Favorites}></Route>
      </Switch>
    </Router>
    </ThemeProvider>
    </Provider>
  );
}

export default App;
