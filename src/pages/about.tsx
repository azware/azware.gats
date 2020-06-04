// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = (props: PageProps) => (
  <Layout>
    <SEO title="About" />
    <h1>About</h1>
    <p>This is juat a page for About content!. Check this out. ({props.path})</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage
