import React from 'react'
import Layout from '../components/layout/Layout'
import { useAuth } from '../context/auth'
const HomePage = () => {
    const [auth, setAuth] = useAuth()
    return (
        <Layout descriptio={"Home page of shopfusion"} keywords={"online clothing store, buy mens shoes online, discount womens dresses,fashion accessories sale, designer handbags"} author={"Ganesh S.Jadhav"} title={"Shopfusion - Home "}>
            <div  > HomePage</div >
            <pre>{JSON.stringify(auth)}</pre>
        </Layout >
    )
}

export default HomePage