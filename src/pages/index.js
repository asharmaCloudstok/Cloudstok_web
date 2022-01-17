import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/hero/Hero";
import '../styles/global.css';
import ContactSection from "../views/ContactSection";
import AboutUs from "../views/AboutUs";



export default function Home() {
  
  return <>
    <Layout>
      <Hero />
      <AboutUs/>
      {/* <ContactSection/> */}
    </Layout>
  </>
}
