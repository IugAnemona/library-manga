import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root } from './routes/root';
import Index from './routes';
import { mangaInfoLoader, getTopMangas } from './api/mangaApi';
import MangaInfoPage from './routes/manga';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: getTopMangas,
      },
      {
        path: 'manga/:mangaId',
        element: <MangaInfoPage />,
        loader: async ({ params }) => {
          return mangaInfoLoader(params.mangaId);
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
