import React from "react"
import { Link } from "gatsby"
import { Button } from 'react-bootstrap'
import { FaCoffee } from 'react-icons/fa'
import { _ } from "underscore" // belum tau cara makenya. bgg jg. harus blajr underscore 

import Layout from "../components/layout"
import Himage from "../components/images/home_image" // masih bgg klo importnya pake _ error
import Logo from "../components/images/logo"
import SEO from "../components/seo"

import 'bootstrap/dist/css/bootstrap.min.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{maxWidth: '200px', paddingbottom: '2rem'}}>
      <Logo />
    </div>
    <h1>Hai.... <FaCoffee /></h1>
    <Button variant="primary" size="sm">Check this!</Button> <br/>
    <p>Selamat datang di web portfolio azware menggunakan gatsby</p>
    <p>Berikut tampilkan beberapa contoh sistem yang telah kami kerjakan</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Himage />
    </div>
    <Link to="/project/" style={{ marginRight: '20px' }}>Project</Link>
    <Link to="/contact/" style={{ marginRight: '20px' }}>Contact</Link>
    <Link to="/about/">About</Link>
  </Layout>
)

export default IndexPage
