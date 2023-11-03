import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './style.css'
import './index.css'

import App from './App.jsx'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Resume from "./pages/Resume";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
    ],
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
);