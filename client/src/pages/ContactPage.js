import React from "react";
import Layout from "../components/layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
    return (
        <Layout descriptio={"contact us page of shopfusion"} keywords={"shop with shopfusion , contact us page of shopfusion , shopfusion , shopfusion adress, how to contact shopfusion"} author={"Ganesh S. Jadhav"} title={"Shopfusion - Contact Us "}>
            <div className="row contactus ">
                <div className="col-md-6 ">
                    <img
                        src="/images/contactus.jpeg"
                        alt="contactus"
                        style={{ width: "100%" }}
                    />
                </div>
                <div className="col-md-4">
                    <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
                    <p className="text-justify mt-2">
                        any query and info about prodduct feel free to call anytime we 24X7
                        vaialible
                    </p>
                    <p className="mt-3">
                        <BiMailSend /> : www.help@ecommerceapp.com
                    </p>
                    <p className="mt-3">
                        <BiPhoneCall /> : 012-3456789
                    </p>
                    <p className="mt-3">
                        <BiSupport /> : 1800-0000-0000 (toll free)
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default Contact;
