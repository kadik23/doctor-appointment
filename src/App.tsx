import { Route, Routes,createBrowserRouter, createRoutesFromChildren, RouterProvider } from 'react-router-dom'
import './App.css'
import Root from './layouts/Root'
import Landing from './pages/Landing'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'

function App() {
  const router = createBrowserRouter(
    createRoutesFromChildren(
      <Route >
        <Route path="/sign_in" element={<SignIn />} /> 
        <Route path="/sign_up" element={<SignUp />} /> 
        <Route path='/' element={(<Root />)}>      
          <Route path="/home" element={<Landing />} />  
        </Route>     
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App
