import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './index.css';
import Menu from './components/Menu/Menu'
import HomeContainer from './pages/HomeContainer';
import TodoContainer from './pages/TodoContainer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route
            path="/"
            element={<HomeContainer />}
          />
          <Route
            path="/todo"
            element={<TodoContainer />}
          />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);