import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (

        <div className="container-fluid bg-dark text-light footer">
            <footer className="container py-4">
                <div className="row">
                    <div className="col-md-4 p-0">
                        <h3>About Us</h3>
                        <p>Explore our e-commerce haven, where quality meets affordability. Shop effortlessly through our diverse product selection, secured with user-friendly features. We prioritize your satisfaction and offer seamless, secure payment options. Join us to redefine your online shopping experience.</p>
                    </div>
                    <div className="col-md-2">
                        <h3>Contact Us</h3>
                        <p>123 Main Street, City<br />
                            Email: info@example.com<br />
                            Phone: (123) 456-7890</p>
                    </div>
                    <div className="col-md-2 text-center">
                        <h3>Follow Us</h3>
                        <ul className="list-unstyled">
                            <li><a target='_blank' href="https://www.facebook.com"><i className="fab fa-facebook"></i> Facebook</a></li>
                            <li><a target="_blank" href="https://www.twitter.com"><i className="fab fa-twitter"></i> Twitter</a></li>
                            <li><a target="_blank" href="https://www.instagram.com"><i className="fab fa-instagram"></i> Instagram</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h3>More And Privacy</h3>
                        <ul className="list-unstyled d-flex flex-column text-center">
                            <Link to={'/policy'}>Privacy Policy</Link>
                            <Link to={'/contact'}>Get In Touch</Link>
                            <Link to={'/about'}>More About Us</Link>

                        </ul>
                    </div>
                </div>
                <h6 className='text-center'>  All Rights Reserved &copy; Ganesh S. Jadhav</h6>
            </footer>
        </div>


    )
}

export default Footer