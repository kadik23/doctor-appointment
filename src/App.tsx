import { Route,createBrowserRouter, createRoutesFromChildren, RouterProvider } from 'react-router-dom'
import './App.css'
import Root from './layouts/Root'
import Landing from './pages/Landing'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Dashboard from './pages/Dashboard'
import MyAppointment from './pages/MyAppointments'
import Doctor from './layouts/Doctor'
import OneAppointmentOverview from './pages/OneAppointmentOverview'
import OurDoctors from './pages/OurDoctors'
import OneDoctorOverview from './pages/OneDoctorOverview'
import BookAppointment from './pages/BookAppointment'

function App() {
  const router = createBrowserRouter(
    createRoutesFromChildren(
      <Route >
        <Route path="sign_in" element={<SignIn />} /> 
        <Route path="sign_up" element={<SignUp />} /> 
        <Route path='/' element={(<Root />)}>      
          <Route path="home" element={<Landing />} />  
          <Route path="one_appointment_overview" element={<OneAppointmentOverview />} />  
          <Route path="our_doctors" element={<OurDoctors />} />  
          <Route path="one_doctor_overview" element={<OneDoctorOverview />} />  
          <Route path="my_appointments" element={<MyAppointment />} />  
          <Route path="booking" element={<BookAppointment />} />  
        </Route>     
        <Route path='/' element={(<Doctor />)}>
          <Route path="dashboard" element={<Dashboard />} />  
        </Route>
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App
