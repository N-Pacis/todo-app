import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import TodoList from "./components/TodoList";
import EditTodo from "./components/EditTodo";
import CreateTodo from "./components/CreateTodo";

function App() {
  return (
    <div>
      <nav className="navbar bg-light navbar-expand-lg navbar-light">
          <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">Todos</Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">Create Todo</Link>
              </li>
          </ul>
      </nav>
      <Switch>
          <Route exact path="/" component={TodoList}/>
          <Route exact path="/edit/:id" component={EditTodo}/>
          <Route exact path="/create" component={CreateTodo}/>
      </Switch>  
    </div>
  );
}

export default App;
