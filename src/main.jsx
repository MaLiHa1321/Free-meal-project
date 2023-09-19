import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './componenet/home/Home.jsx';

const router = createBrowserRouter([
  {
  
        path: "/",
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/categories.php'),
        element: <Home></Home>,
    
    

},
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
