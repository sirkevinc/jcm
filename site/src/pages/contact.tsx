import React from "react"
import Layout from "../components/Layout"
import ContactForm from "../components/ContactForm"
import Head from "../components/Head"


const Contact = () => {
    return (
        <Layout>
            <Head title="Contact" />
            <div className="contact__container">
                <h3>Contact Us</h3>
                <h4>We look forward to hearing from you!</h4>
                <ContactForm />
            </div>
        </Layout>
    )
}

export default Contact