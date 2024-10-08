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
import axios from "axios";
import AppLayout from './layouts/AppLayout'
import ContactUs from './pages/ContactUs'

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://127.0.0.1:3000/api/v1/auth';

function App() {

  const router = createBrowserRouter(
    createRoutesFromChildren(
      <Route>
        <Route path="/" element={<AppLayout  />} > 

          <Route path="sign_in" element={<SignIn />} /> 
          <Route path="sign_up" element={<SignUp />} /> 
          <Route path='/' element={<Root />}>
            <Route path="home" element={<Landing />} /> 
            <Route path="our_doctors" element={<OurDoctors />} /> 
            <Route path="one_doctor_overview/:id" element={<OneDoctorOverview />} /> 
            <Route path="booking" element={<BookAppointment />} /> 
            <Route path="contact_us" element={<ContactUs />} /> 
          </Route> 
          <Route path='/' element={(<Doctor />)}>
            <Route path="my_appointments" element={<MyAppointment />} /> 
            <Route path="one_appointment_overview/:id" element={<OneAppointmentOverview />} /> 
            <Route path="dashboard" element={<Dashboard />} /> 
          </Route>
        </Route>
        <Route path="*" element={<div>Error 404</div>} /> 
      </Route>
    )
  )
  return (

    <RouterProvider router={router} />

  )
}

export default App
