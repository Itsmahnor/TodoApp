import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import  Home  from './Component/Home';
import SignUp from './Component/SignUp';
import SignIn from './Component/SignIn';
import { Top } from './Component/Navbar';
import { About } from './Component/About';
import { Todo } from './Component/Todo';
import { Update } from './Component/Update';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authAction } from './Store';


function App() {
   const dispatch = useDispatch();
  useEffect(()=>{
    const id=sessionStorage.getItem("id");
    console.log(id)
    if(id){
      dispatch(authAction.login())
    }

  },[])
  const router=createBrowserRouter([
  
    {
      path:"/",
      element:(<> <Home /> </>)
    },
    {
      path:"/tasks",
      element:(<> <Top /> <Todo />  </>)
    },
    {
      path:"/signup",
      element:(<><Top /> <SignUp />  </>)
    },
    {
      path:"/signin",
      element:(<><Top /> <SignIn />  </>)
    },
    {
      path:"/about",
      element:(<><Top /> <About />    </>)
    },
    {
      path:"/contact",
      element:(<>   </>)
    },
    {
      path:"/update",
      element:(<><Top /> <Update />  </>)
    }
  ]);
  return (
    <RouterProvider router={router} />  
  );
}

export default App;

