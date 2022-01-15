import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/hero/Hero";
import '../styles/global.css';



export default function Home() {
  // const divStyle = { height: 'calc(100vh - 80px)' }
  return <>
    <Layout>
      <Hero />
    </Layout>
  </>
}
