import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { GiShoppingBag } from 'react-icons/gi'
import { useAuth } from '../../context/auth'
import toast from 'react-hot-toast'

const Header = () => {
    const [auth, setAuth] = useAuth()

    const handleLogout = () => {
        localStorage.removeItem('auth')
        setAuth({
            ...auth,
            user: null,
            token: ''
        })

        toast.success("Logout Successfully")
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <Link className="navbar-brand" ><GiShoppingBag /> ShopFusion</Link>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link " aria-current="page" to='/'>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " aria-current="page" to='/category'>Category</NavLink>
                            </li>
                            {!auth.user ? (<>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to='/register'>Register</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to='/login'>Login</NavLink>
                                </li>
                            </>) : (<>
                                <li className="nav-item dropdown">
                                    <NavLink
                                        className="nav-link dropdown-toggle"

                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        {auth?.user?.name}
                                    </NavLink>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <NavLink to={`/dashboard/${auth?.user.role === 1 ? 'admin' : 'user'}`} className="dropdown-item">
                                                Dashboard
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                onClick={handleLogout}
                                                to="/login"
                                                className="dropdown-item"
                                            >
                                                Logout
                                            </NavLink>
                                        </li>
                                    </ul>
                                </li>
                            </>)}
                            <li className="nav-item">
                                <NavLink className="nav-link " to='/cart'>Cart {0}</NavLink>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header