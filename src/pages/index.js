import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Logo from "../components/gambar_1"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{maxWidth: '200px', paddingbottom: '2rem'}}>
      <Logo />
    </div>
    <h1>Halo semua</h1>
    <p>Selamat datang di web portfolio azware menggunakan gatsby</p>
    <p>Berikut tampilkan beberapa contoh sistem yang telah kami kerjakan</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/" style={{ marginRight: '10px' }}>Go to page 2</Link>
    <Link to="/page-3/" style={{ marginRight: '10px' }}>Go to page 3</Link> <br></br>
    <Link to="/about/">About</Link>
  </Layout>
)

export default IndexPage
