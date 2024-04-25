import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Appliedjobs from './components/Appliedjobs/Appliedjobs';
import JobDetails from './components/JobDetails/JobDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      
        {
          path: '/',
          element: <Home></Home>
         
        },
        {
          path:'/Applied jobs',
          element:<Appliedjobs></Appliedjobs>
        },
        {
          path:'/job/:id',
          element:<JobDetails></JobDetails>,
          loader:()=> fetch('../jobs.json')

        }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
