import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Login from './pages/Auth/Login'
import Dashboard from './pages/Dashboard/Dashboard'
import UserManagement from './pages/UserManagement/UserManagement'
import RestaurantManagement from './pages/RestaurantManagement/RestaurantManagement'
import OrderManagement from './pages/OrderManagement/OrderManagement'
import Payments from './pages/Payments/Payments'
import Pricing from './pages/Pricing/Pricing'
import Offers from './pages/Offers/Offers'
import Reviews from './pages/Reviews/Reviews'
import Support from './pages/Support/Support'
import Logistics from './pages/Logistics/Logistics'
import Analytics from './pages/Analytics/Analytics'
import Settings from './pages/Settings/Settings'
import Security from './pages/Security/Security'
import CMS from './pages/CMS/CMS'

function App() {
  const isAuthenticated = localStorage.getItem('admin_token') !== null

  return (
    <Router>
      <Routes>
        <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/dashboard" replace />} />
        <Route path="/" element={!isAuthenticated ? <Navigate to="/login" replace /> : <Layout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<UserManagement />} />
          <Route path="restaurants" element={<RestaurantManagement />} />
          <Route path="orders" element={<OrderManagement />} />
          <Route path="payments" element={<Payments />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="offers" element={<Offers />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="support" element={<Support />} />
          <Route path="logistics" element={<Logistics />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="settings" element={<Settings />} />
          <Route path="security" element={<Security />} />
          <Route path="cms" element={<CMS />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App

