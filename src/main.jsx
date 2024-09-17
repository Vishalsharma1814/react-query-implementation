import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Products from './paginated.jsx';
import Product from './Product.jsx';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import Dependant from './Dependant.jsx';
import Parallel from "./Parallel.jsx"
import Optimistic from './Optimistic.jsx';
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/products',
        element: <Products />,
    },
    {
        path: '/products/:productId',
        element: <Product />,
    },
    {
        path: 'paginated',
        element: <Products />,
    },
    {
        path: 'parallel',
        element: <Parallel />,
    },
    {
        path: 'optimistic',
        element: <Optimistic />,
    },
    {
        path: 'dependant',
        element: <Dependant />,
    },
]);

export const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false}/>
     </QueryClientProvider>
);
