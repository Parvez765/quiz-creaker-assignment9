import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Component/Home/Home';
import Classes from './Component/Classes/Classes';
import Error from './Component/Error/Error';

function App() {
  const router = createBrowserRouter([
    {
      path: "/", element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
        {
          path: "/", element: <Home></Home>
        },
        {
          path: "/home",
          loader: () => {
            return fetch(`https://openapi.programming-hero.com/api/quiz`)
          },
          element: <Home></Home>
        },
        {
          path: "/classes/:classesId",
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.classesId}`)
          },
          element: <Classes></Classes>
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
