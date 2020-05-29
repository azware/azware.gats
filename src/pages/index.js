import React from "react"
import { FaCoffee } from 'react-icons/fa'
//import { _ } from "underscore" // belum tau cara makenya. bgg jg. harus blajr underscore 

import Layout from "../components/layout"
import Himage from "../components/images/image" // masih bgg klo importnya pake _ error
import Logo from "../components/images/logo"
import SEO from "../components/seo"

// For React-Bootstrap 
import { Row,Col,Alert,Button,Jumbotron } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Alert variant="primary">
      Hi, Makasih sudah mampir...
    </Alert>

    <Jumbotron>
      <h1>Hello, world! <FaCoffee /></h1>
      <p>
        Selamat datang di web portfolio azware menggunakan gatsby
      </p>
      <p>
        <Button variant="primary">Learn more</Button>
      </p>
    </Jumbotron>
    <Row>
      <Col sm={12}>
        <p className="mb-0">
          Berikut contoh tampilan project yang sudah kami kerjakan
        </p>
        <hr />
      </Col>
      <Col sm={6}>
          <div style={{maxWidth: '250px',justifyContent: 'center'}}>
            <Logo />
          </div>
      </Col>
      <Col sm={6}>
          <div style={{maxWidth: `250px`,justifyContent: 'center'}}>
            <Himage />
          </div>
      </Col>
    </Row>
  </Layout>
)

export default IndexPage
