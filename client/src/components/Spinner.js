import React, { useState, useEffect } from 'react'
import toast from 'react-hot-toast'
import { useNavigate, useLocation } from 'react-router-dom'

const Spinner = () => {
    const [count, setCount] = useState(5)
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevCount) => --prevCount)
        }, 1000)

        toast.error('Unauthorized user please login.')
        count === 0 && navigate('/login', {
            state: location.pathname
        })

        return () => clearInterval(interval)
    }, [count, navigate, location])
    return (
        <>
            <div className="d-flex justify-content-center align-items-center flex-column " style={{ height: '100vh' }}>
                <div className="spinner-border" role="status">

                </div>
                <div className='text-center'>Redirecting you in {count}...</div>
            </div>
        </>

    )
}

export default Spinner