import React from 'react'

import { Routes, Route, } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import PrivacyPolicy from './pages/PrivacyPolicy'
import PageNotFound from './pages/PageNotFound'
import Register from './pages/auth/Register'
import Login from './pages/auth/Login'
import Dashboard from './pages/user/Dashboard'
import PrivateRoute from './components/routes/PrivateRoute'
import ForgotPasssword from './pages/auth/ForgotPassword'
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminPrivateRoute from './components/routes/AdminPrivateRoute'
import CreateCategory from './pages/admin/CreateCategory'
import CreateProduct from './pages/admin/CreateProduct'
import Users from './pages/admin/Users'
import Orders from './pages/user/Orders'
import Profile from './pages/user/Profile'
import Products from './pages/admin/Products'
import UpdateProduct from './pages/admin/UpdateProduct'
import Search from './pages/Search'
import ProductDetails from './pages/ProductDetails'
import Categories from './pages/Categories'
import CategoryProduct from './pages/CategoryProduct'
import CartPage from './pages/CartPage'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/product/:slug' element={<ProductDetails />} />
        <Route path="/category/:slug" element={<CategoryProduct />} />
        <Route path="/categories" element={<Categories />} />
        <Route path='/search' element={<Search />} />
        <Route path='/products' element={<Products />} />
        <Route path="/cart" element={<CartPage />} />

        {/* user private routes  */}
        <Route path='/dashboard' element={<PrivateRoute />} >
          <Route path='user' element={<Dashboard />} />
          <Route path='user/orders' element={<Orders />} />
          <Route path='user/profile' element={<Profile />} />


        </Route>

        {/* admin private routes  */}
        <Route path='/dashboard' element={<AdminPrivateRoute />} >
          <Route path='admin' element={<AdminDashboard />} />
          <Route path='admin/create-category' element={<CreateCategory />} />
          <Route path='admin/create-product' element={<CreateProduct />} />
          <Route path='admin/users' element={<Users />} />
          <Route path='admin/products' element={<Products />} />
          <Route path='admin/product/:slug' element={<UpdateProduct />} />
        </Route>

        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forgot-password' element={<ForgotPasssword />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/policy' element={<PrivacyPolicy />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>


    </>
  )
}

export default App