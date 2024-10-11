import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import About from './components/About.jsx';
import Project from './components/Project.jsx';
import Content from './components/Contact.jsx';
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";
import './index.css';
import Nav from './components/Nav.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <>
    <App/>
    <About/>
    <Project/>
    <Content/>
    </>,
  },
  {
    path: "/Home",
    element: 
    <>
    <App/>
    </>,
  },{
    path:"AboutMe",
    element: <>
    <Nav/>
    <About/>
    </>
  },{
    path:"Projects",
    element: <>
    <Nav/>
    <Project/>
    </>
  },{
    path:"Contact",
    element:<>
    <Nav/>
    <Content/>
    </>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
 <RouterProvider router={router}/>
)
