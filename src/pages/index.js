import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Gambar from "../components/gambar_1"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Halo semua</h1>
    <p>Selamat datang di web portfolio azware menggunakan gatsby</p>
    <p>Berikut kami mencoba beberapa contoh</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <div style={{maxWidth: '200px', paddingbottom: '2rem'}}>
      <Gambar />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/page-3/">Go to page 3</Link>
    <Link to="/about/">About</Link>
  </Layout>
)

export default IndexPage
