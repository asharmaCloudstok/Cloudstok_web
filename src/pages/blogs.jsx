import React from "react"
import Layout from "../components/Layout"
import Loading from "../components/loading/Loading"
import Pagename from "../components/pagename/Pagename"

const Blogs = () => {
  return (
    <Layout>
      <Pagename name={"Blogs and Case Studies"} />
      <Loading></Loading>
    </Layout>
  )
}

export default Blogs
