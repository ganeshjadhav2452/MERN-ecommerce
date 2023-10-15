import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Helmet } from 'react-helmet'
import { Toaster } from "react-hot-toast";
const Layout = ({ children, description, keywords, author, title }) => {
    return (
        <div>
            <Helmet>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content={author} />
                <meta charSet="utf-8" />
                <title>{title}</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Header />
            <main style={{ minHeight: '70vh' }}>
                <Toaster />
                {children}
            </main>
            <Footer />
        </div>
    )
}

Layout.defaultProps = {
    title: "Shopfusion - Ecommerce",
    description: "Mern Stack Ecommerce Web App",
    keywords: "mern, react, node , express, mongodb, mognoose, jsonwebtoken,bcrypt",
    author: "Ganesh S. Jadhav"
}
export default Layout