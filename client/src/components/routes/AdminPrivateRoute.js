import { useEffect, useState } from "react"
import { useAuth } from "../../context/auth"
import { Outlet } from "react-router-dom"
import axios from "axios"
import Spinner from "../Spinner"
import toast from "react-hot-toast"

export default ({ path = 'login' }) => {
    const [ok, setOk] = useState(false)
    const [auth, setAuth] = useAuth()

    useEffect(() => {

        const authCheck = async () => {
            try {


                const res = await axios.get('/api/v1/auth/admin-auth')

                if (res.data.ok) {
                    setOk(true)
                    toast.success('Welcome to Admin Dashboard...')
                } else {
                    setOk(false)
                }

            } catch (error) {
                console.log(error)
            }

        }
        if (auth?.token) authCheck()


    }, [auth?.token])

    return ok ? <Outlet /> : <Spinner path="" />
}


