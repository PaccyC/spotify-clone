import { createRoutesFromElements,createBrowserRouter,Route,RouterProvider  } from 'react-router-dom'
import Login from './features/auth/Login';
import Home from './pages/Home';
import Register from './features/auth/Register';
import PasswordResetRequest from './features/auth/PasswordResetRequest';
import ResetPassword from './features/auth/ResetPassword';


const router= createBrowserRouter(
    createRoutesFromElements([
      <Route path="/" element={<Home />} />,
        <Route exact path="/auth/reset-password" element={<ResetPassword/>} />,
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
