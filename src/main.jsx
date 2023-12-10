import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './styles/global.css';

import HomePage from './pages/home/HomePage';
import ListPage from './pages/list/ListPage';
import PostPage from './pages/post/PostPage';
import AnswerPage from './pages/answer/AnswerPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/list',
    element: <ListPage />,
  },
  {
    path: '/post/{id}',
    element: <PostPage />,
  },
  {
    path: 'post/{id}/answer',
    element: <AnswerPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
