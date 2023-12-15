import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import './index.css'

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './pages/Home.jsx';
import Characters from './pages/Characters.jsx';
import Contact from './pages/Contact.jsx';

const router = createBrowserRouter([
{
  element: <App />,
  children: [
    {
      path: "/",
      element: <Home />,
    }, {
      path: "/Characters",
      element: <Characters />,
    }, {
      path: "/Contact",
      element: <Contact />,
    },
  ],
},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router}/>
);
