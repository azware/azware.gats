// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = (props: PageProps) => (
  <Layout>
    <SEO title="Project" />
    <h1>This is for my sample project</h1>
    <p>Welcome to my project({props.path})</p>
    <Link to="/">back to homepage</Link>
  </Layout>
)

export default SecondPage
