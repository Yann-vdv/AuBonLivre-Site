import React from 'react';
import Home from './home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '../components/Layout';
import Register from './user/register';
import Login from './user/login';
import User from './user/user';
import Bid from './bid';
import Page404 from './page404';
import Item from './item/[id]';
import { useAuth } from '../context/Auth';

function Index() {

const { user } = useAuth();

const router = createBrowserRouter([
    (user && user.logged) ?
    {
      path: "/",
      element: <Layout />,
      errorElement: <Page404 />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "enchères",
          element: <Bid/>,
        },
        {
          path: "item/:id",
          element: <Item />,
        },
        {
          path: "profil",
          element: <User />,
        }
      ]
    }
    :
    {
      path: "/",
      errorElement: <Page404 />,
      children: [
        {
          index: true,
          element: <Login />,
        },
        {
          path: "connexion",
          element: <Login />,
        },
        {
          path: "inscription",
          element: <Register />,
        },
      ]
    }
]);

  return (
    <RouterProvider router={router} />
  );
}

export default Index;