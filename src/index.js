import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './index.css';
/** Components */
import Page from './components/Page/Page';
/** Pages */
import Home from './pages/Home';
import Todo from './pages/Todo';
import Notes from './pages/Notes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Page>
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/todo"
              element={<Todo />}
            />
            <Route
              path="/notes"
              element={<Notes />}
            />
          </Routes>
        </Page>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);