import Back from './components/back/Back';
import Signup from './components/signup/Signup';
import { createBrowserRouter,Link,RouterProvider } from 'react-router-dom';



export default function App() {
  const routes = createBrowserRouter([
    {
      path:'/signup',
      element:<Signup/>
    },
    {
      path:'/login',
      element:<Back/>
    },
  ])
  return (
   <>
  <RouterProvider router={routes}/>   
   </>
   
  )
}