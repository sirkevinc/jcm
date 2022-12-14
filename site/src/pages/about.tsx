import React from "react"
import Layout from "../components/Layout"
import Head from "../components/Head"
import ApproachBox from "../components/ApproachBox"
import AboutImage from "../images/about.jpg"

const About = () => {
    return (
        <Layout>
            <Head title="About" />
            <div className="about__container">
                <div className="about__banner">
                    <img className="about__image" src={AboutImage} />
                </div>
                <div className="content">
                    <h2>About Jangi Consulting Management</h2>
                    <p>We're centered on what's best for you and your business</p>
                    <p>We strive to be a partner to businesses big and small, providing the professional prowess you need to chart your path forward. It’s all part of our mission: To deliver an unmatched experience you won’t get anywhere else.</p>
                </div>
                <ApproachBox />
            </div>
        </Layout>
    )
}

export default About