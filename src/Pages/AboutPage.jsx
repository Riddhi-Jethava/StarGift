import React from 'react'
import AboutComponent from './../Components/AboutUsPageComponent/AboutComponent';
import VisionMissionComponent from './../Components/AboutUsPageComponent/VisionMissionComponent';
import ClientLogosComponent from './../Components/AboutUsPageComponent/ClientLogosComponent';
import PageHeader from './../StaticComponents/PageHeader';

const AboutPage = () => {
    return (
        <div>
            <PageHeader
            title="About Us"
            subtitle = "7 Star Gifts"
            description = "Honor For The Best."
            // breadcrumbs = [
            // {label: "Home", href: "/", icon: Home }
            // {label: "Pages", href: "/pages" }
            // {label: "About Us", href: "/about" }
            // ]
            backgroundImage = "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            />
            <AboutComponent />
            <VisionMissionComponent />
            <ClientLogosComponent />
        </div>
    )
}

export default AboutPage
