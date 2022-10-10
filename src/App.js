import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Component/Home/Home';
import Classes from './Component/Classes/Classes';

function App() {
  const router = createBrowserRouter([
    {
      path: "/", element: <Main></Main>, children: [
        {
          path: "/", element: <Home></Home>
        },
        {
          path: "/home", element: <Home></Home>
        },
        {
          path: "/classes", element: <Classes></Classes>
        }
      ]
    }
  ])
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
