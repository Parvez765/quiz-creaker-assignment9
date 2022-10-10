
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Component/Home/Home';
import Classes from './Component/Classes/Classes';
import Error from './Component/Error/Error';
import Blog from './Component/Blog/Blog';
import Static from './Component/Static/Static';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
       
        {
          path: "/home",
          loader: () => {
            return fetch(`https://openapi.programming-hero.com/api/quiz`)
          },
          element: <Home></Home>
        },
        {
          path: "/classes",
          element: <Classes></Classes>
        },
        {
          path: "/classes/:classesId",
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.classesId}`)
          },
          element: <Classes></Classes>
        },
        {
          path: "/statics",
          element: <Static></Static>
        },
        {
          path: "/blog",
          element: <Blog></Blog>
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
