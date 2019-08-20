import React from 'react'
import { Link } from 'gatsby';
import Layout from '../components/layout'

const AboutPage= () => {
    return (
        <Layout>
            <h1>About Us</h1>
            <p>loremloremloremloremloremloremloremloremloremloremloremlorem</p>
            <p><Link to='/contact'>Contact Page</Link></p>
        </Layout>
    );
}

export default AboutPage;
