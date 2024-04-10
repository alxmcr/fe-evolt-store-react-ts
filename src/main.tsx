import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import { routes } from './router/routes.tsx';
import ProductFilterProvider from './providers/ProductFilterProvider/index.tsx';

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ProductFilterProvider>
      <RouterProvider router={router} />
    </ProductFilterProvider>
  </React.StrictMode>,
);
