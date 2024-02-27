import React from 'react'
import Layout from '../../components/layout/Layout'
import AdminMenu from '../../components/layout/AdminMenu'
import { useAuth } from '../../context/auth'

const AdminDashboard = () => {
    const [auth] = useAuth()

    return (
        <Layout title={'Shopfusion - Admin'}>
            <div className='container-fluid m-3 p-3 flex-style-600'>
                <div className='row '>
                    <div className='col-md-3'>
                        <AdminMenu />

                    </div>
                    <div className='col-md-9 '>
                        <div classname="card admin-card">
                            <div classname="card-body ">
                                <div classname="d-flex justify-content-between">
                                    <h4 classname="card-title">Admin User</h4>
                                    <span classname="badge badge-primary">Admin</span>
                                </div>
                                <hr />
                                <div classname="row  ">
                                    <div classname="col-md-6">
                                        <h6 classname="card-subtitle mb-2 text-muted">Name:</h6>
                                        <p classname="card-text">John Doe</p>
                                    </div>
                                    <div classname="col-md-6">
                                        <h6 classname="card-subtitle mb-2 text-muted">Email:</h6>
                                        <p classname="card-text">admin@example.com</p>
                                    </div>
                                </div>
                                <div classname="row">
                                    <div classname="col-md-6">
                                        <h6 classname="card-subtitle mb-2 text-muted">Phone:</h6>
                                        <p classname="card-text">(123) 456-7890</p>
                                    </div>
                                    <div classname="col-md-6">
                                        <h6 classname="card-subtitle mb-2 text-muted">Location:</h6>
                                        <p classname="card-text">New York, USA</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default AdminDashboard