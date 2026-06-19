import { BrowserRouter, Routes, Route } from 'react-router-dom'

// layout
import TourLayout from './layouts/TourLayout'
import HomeLayout from './components/layouts/HomeLayout'
import PageLayout from './layouts/PageLayout'
import ScrollToTop from './components/ScrollToTop'

// home
import Home from './features/home/Home'
import About from './features/home/About'
import ContactUs from './features/home/ContactUs'

// auth
import UserSignIn from './features/auth/user/UserSignIn'
import UserSignUp from './features/auth/user/UserSignUp'
import VendorSignIn from './features/auth/vendor/VendorSignIn'
import VendorSignUp from './features/auth/vendor/VendorSıgnUp'

// tours
import TourDetails from './features/tours/TourDetail'
import Tours from './features/tours/Tours'

// console
// console pages
import UserConsole from './features/dashboard/UserConsole'
import Dashboard from './features/dashboard/UserConsole/tabs/shared/Dashboard'
import Profile from './features/dashboard/UserConsole/tabs/shared/Profile'

// admin tabs
import AdminVendorManagement from './features/dashboard/UserConsole/tabs/admin/VendorManagement'
import AdminUserManagement from './features/dashboard/UserConsole/tabs/admin/UserManagement'
import AdminTourManagement from './features/dashboard/UserConsole/tabs/admin/TourManagement'
import AdminReservationManagement from './features/dashboard/UserConsole/tabs/admin/ReservationManagement'
import AdminUserComplaints from './features/dashboard/UserConsole/tabs/admin/UserComplaints'
import AdminVendorComplaints from './features/dashboard/UserConsole/tabs/admin/VendorComplaints'

// vendor tabs
import VendorTourManagement from './features/dashboard/UserConsole/tabs/vendor/TourManagement'
import VendorUserComplaints from './features/dashboard/UserConsole/tabs/vendor/UserComplaints'

// user tabs
import UserMyTours from './features/dashboard/UserConsole/tabs/user/MyTours'

import VendorDetails from './features/vendor/VendorDetails'
import { useContext } from 'react'
import { AuthContext } from './context/AuthContext'


function App() {
  const { user } = useContext(AuthContext);
  const role = user?.role || 'user';

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>

        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Contact-Us" element={<ContactUs />} />
          {/* Fallback for other routes defined in Header/Footer */}
          <Route path="Tours" element={<div className="py-20 text-center">Turlar Sayfası Yakında Gelecek...</div>} />
          {/* <Route path="user-Signin" element={<div className="py-20 text-center">Giriş Yap Sayfası Yakında Gelecek...</div>} /> */}
          <Route path="*" element={<div className="py-20 text-center text-3xl">404 - Sayfa Bulunamadı</div>} />
        </Route>

        <Route path="/tours" element={<TourLayout />}>
          <Route index element={<Tours />} />
          <Route path=":id" element={<TourDetails />} />
        </Route>

        <Route path="/console" element={<UserConsole />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />

          {/* Role Based Routes */}
          {role === 'admin' && (
            <>
              <Route path="vendor-management" element={<AdminVendorManagement />} />
              <Route path="user-management" element={<AdminUserManagement />} />
              <Route path="tour-management" element={<AdminTourManagement />} />
              <Route path="booking-management" element={<AdminReservationManagement />} />
              <Route path="client-feedbacks" element={<AdminUserComplaints />} />
              <Route path="vendor-feedback" element={<AdminVendorComplaints />} />
            </>
          )}

          {role === 'vendor' && (
            <>
              <Route path="tour-management" element={<VendorTourManagement />} />
              <Route path="client-feedbacks" element={<VendorUserComplaints />} />
            </>
          )}

          {role === 'user' && (
            <>
              <Route path="my-tours" element={<UserMyTours />} />
            </>
          )}

          <Route path="*" element={<div className="bg-slate-50 rounded-xl p-8 text-center text-slate-500 font-medium">Bu özellik yapım aşamasındadır veya bu sayfaya erişim yetkiniz yok.</div>} />
        </Route>

        <Route element={<PageLayout />}>
          <Route path="/vendor/:id" element={<VendorDetails />} />
        </Route>

        <Route path="/user-signin" element={<UserSignIn />} />
        <Route path="/user-signup" element={<UserSignUp />} />
        <Route path="/vendor-signin" element={<VendorSignIn />} />
        <Route path="/vendor-signup" element={<VendorSignUp />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
