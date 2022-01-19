import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/hero/Hero";
import '../styles/global.css';
import ContactSection from "../views/ContactSection";
import AboutUs from "../views/AboutUs";
import OurClients from "../views/OurClients";
import OurServices from "../views/OurServices";
import Milestones from "../views/Milestones";
import OurBlogs from "../views/OurBlogs";



export default function Home() {
  
  return <>
    <Layout>
      <Hero />
      <AboutUs/>
      <OurServices/>
      <Milestones/>
      <OurClients/>
      <OurBlogs/>
      <ContactSection/>
    </Layout>
  </>
}
