import { createRoutesFromElements,createBrowserRouter,Route,RouterProvider  } from 'react-router-dom'
import Login from './features/auth/Login';
import Home from './pages/Home';
import Register from './features/auth/Register';
import PasswordResetRequest from './features/auth/PasswordResetRequest';


const router= createBrowserRouter(
    createRoutesFromElements([
        <Route exact path="/" element={<Home/>} />,
        <Route path="/register" element={<Register/>} />,
        <Route path="/login" element={<Login/>} />,
        <Route path="/request-reset" element={<PasswordResetRequest/>} />
    ])
)
function App() {
  return (
   <RouterProvider router={router}/>
  );
}

export default App;
