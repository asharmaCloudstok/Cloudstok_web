import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/hero/Hero";
import '../styles/global.css';
import ContactSection from "../views/ContactSection";
import AboutUs from "../views/AboutUs";
import OurClients from "../views/OurClients";
import OurServices from "../views/OurServices";



export default function Home() {
  
  return <>
    <Layout>
      <Hero />
      <AboutUs/>
      <OurServices/>
      <OurClients/>
      {/* <ContactSection/> */}
    </Layout>
  </>
}
