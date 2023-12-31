import React, { useState } from "react";
import axios from "axios";
import Layout from "../../components/layout/Layout";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/authStyles.css";
import { useAuth } from "../../context/auth";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [auth, setAuth] = useAuth()
    const navigate = useNavigate();
    const location = useLocation()
    // form function
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/api/v1/auth/login", {
                email,
                password,
            });
            if (res && res.data.success) {
                toast.success(res.data && res.data.message);
                setAuth({
                    ...auth,
                    user: res.data.user,
                    token: res.data.token
                })
                localStorage.setItem('auth', JSON.stringify(res.data))
                navigate(location.state || "/");
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };
    return (
        <Layout descriptio={"singin page of shopfusion"} keywords={"shop with shopfusion , login  shopfusion , shopfusion singup , shopfusion, shopfusion login"} author={"Ganesh S. Jadhav"} title={"Shopfusion - Login "}>
            <div className="form-container ">
                <form onSubmit={handleSubmit}>
                    <h4 className="title">LOGIN FORM</h4>

                    <div className="mb-3">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder="Enter Your Email "
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Enter Your Password"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <button type="submit" className="btn btn-primary">
                            LOGIN
                        </button>
                    </div>
                    <button type="button" onClick={() => navigate('/forgot-password')} className="btn btn-primary">
                        FORGOT PASSWORD
                    </button>
                </form>
            </div>
        </Layout>
    );
};

export default Login;