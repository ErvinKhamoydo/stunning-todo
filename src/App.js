import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import Navbar from './components/Navbar';
import About from './pages/About/About';
import Auth from './pages/Auth';
import TodoList from './pages/TodoLists/TodoLists';
import Tasks from './pages/Tasks/Tasks';
import { AuthState } from './redux/Auth/authState';
import { useContext, useEffect } from 'react';

function App() {
  useEffect(() => {
    // AuthState.autoLogin();

    // console.log(AuthState.autoLogin());
    console.log('effect');
  }, [])

  return (
    <AuthState>
      <BrowserRouter>
        <Navbar />
        <div className="container pt-4">
          <Switch>
            <Route path="/auth" exact component={Auth} />
            <Route path="/about" component={About} />
            <Route path="/tasks" component={Tasks} />
            <Route path="/1" exact component={TodoList} />
            <Redirect to="/1" />
          </Switch>
        </div>
      </BrowserRouter>
    </AuthState>
  );
}

export default App;