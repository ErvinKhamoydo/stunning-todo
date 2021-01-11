import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import { Navbar } from './components/Navbar';
import { About } from './pages/About/About';
import { Auth } from './pages/Auth';
import { Todo } from './pages/Todo';
import { TodoList } from './pages/TodoList';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container pt-4">
        <Switch>
          <Route path="/auth" exact component={Auth} />
          <Route path="/todo-list/:id/todo/:id" component={Todo} />
          <Route path="/about" component={About} />
          <Route path="/:id" exact component={TodoList} />
          <Redirect to="/1" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;