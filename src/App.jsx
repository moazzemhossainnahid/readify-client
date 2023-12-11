
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import './App.css'
import Home from './Pages/Home/Home'
import RequireAuth from './Components/Others/RequireAuth/RequireAuth'
import Signin from './Pages/Auth/Signin/Signin'
import Signup from './Pages/Auth/Signup/Signup'
import NotFound from './Pages/NotFound/NotFound'
import Profile from './Components/Dashboard/UserDashboard/Profile/Profile'
import CPanel from './Components/Dashboard/AdminDashboard/Admin/CPanel'
import AdDashboard from './Components/Dashboard/AdminDashboard/Dashboard/AdDashboard'
import ManageUsers from './Components/Dashboard/AdminDashboard/ManageUsers/ManageUsers'
import RequireAdmin from './Components/Others/RequireAdmin/RequireAdmin'
import Header from './Pages/Shared/Header/Header'
import Footer from './Pages/Shared/Footer/Footer'
import Books from './Pages/Books/Books'
import ManageBooks from './Components/Dashboard/AdminDashboard/ManageBooks/ManageBooks'
import SingleBooksDetails from './Components/Pages/Books/SingleBooksDetails'
import Success from './Components/Others/Success/Success'
import Checkout from './Components/Pages/Checkout/Checkout'
import ManageContacts from './Components/Dashboard/AdminDashboard/ManageContacts/ManageContacts'
import ManageOrders from './Components/Dashboard/AdminDashboard/ManageOrders/ManageOrders'
import ContactUS from './Pages/ContactUS/ContactUS'
import AboutUS from './Pages/AboutUS/AboutUS'
import MyBooks from './Components/Dashboard/UserDashboard/MyBooks/MyBooks'

function App() {

  return (
    <>
      <div className="App pt-20">
        {(window.location.pathname !== '/cpanel' && window.location.pathname !== '/cpanel/addashboard' && window.location.pathname !== '/cpanel/musers' && window.location.pathname !== '/cpanel/mbooks' && window.location.pathname !== '/cpanel/mcontacts' && window.location.pathname !== '/cpanel/morders') && <Header />}
        {/* <Header /> */}
        <div className="">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/books' element={<Books />} />
            <Route path='/books/:id' element={<RequireAuth><SingleBooksDetails /></RequireAuth>} />
            <Route path='/checkout/:id' element={<RequireAuth><Checkout /></RequireAuth>} />
            <Route path="/ssl-payment-success" element={<RequireAuth><Success/></RequireAuth>} />
            <Route path='/aboutus' element={<AboutUS />} />
            <Route path='/contactus' element={<ContactUS />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/profile' element={<RequireAuth><Profile /></RequireAuth>} />
            <Route path="/mybooks" element={<RequireAuth><MyBooks /></RequireAuth>} />
            <Route path='*' element={<NotFound />} />


            {/* Control Panel Routes */}
            <Route path="/cpanel" element={<RequireAuth><RequireAdmin><CPanel /></RequireAdmin></RequireAuth>}>
              <Route index element={<AdDashboard />} />
              <Route path="addashboard" element={<AdDashboard />} />
              <Route path="musers" element={<ManageUsers />} />
              <Route path="mbooks" element={<ManageBooks />} />
              <Route path="morders" element={<ManageOrders />} />
              <Route path="mcontacts" element={<ManageContacts />} />
            </Route>
          </Routes>
        </div>
        {(window.location.pathname !== '/cpanel' && window.location.pathname !== '/cpanel/addashboard' && window.location.pathname !== '/cpanel/musers' && window.location.pathname !== '/cpanel/mbooks' && window.location.pathname !== '/cpanel/mcontacts' && window.location.pathname !== '/cpanel/morders') && <Footer />}
        <ToastContainer />
      </div>
    </>
  )
}

export default App
