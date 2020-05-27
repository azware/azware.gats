import React from "react"
import { Link } from "gatsby"
import { FaCoffee } from 'react-icons/fa'
//import { _ } from "underscore" // belum tau cara makenya. bgg jg. harus blajr underscore 

import Layout from "../components/layout"
import Himage from "../components/images/image" // masih bgg klo importnya pake _ error
import Logo from "../components/images/logo"
import SEO from "../components/seo"

// For React-Bootstrap 
import { Button } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Alert } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    
    <Container>
      <Row>
        <Col sm={2}>
          <div style={{maxWidth: '100px'}}>
            <Logo />
          </div>
        </Col>
        <Col sm={10}>
          <h1>Hai.... <FaCoffee /></h1>
          <Button variant="primary" size="sm">Check Btn!</Button>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>        
          <Alert variant="info">
            <Alert.Heading>Hey, nice to see you</Alert.Heading>
            <p>
              Selamat datang di web portfolio azware menggunakan gatsby              
              <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
                <Himage />
              </div>
            </p>
            <hr />
            <p className="mb-0">
              Berikut tampilkan beberapa sistem yang kami kerjakan
            </p>
          </Alert>
        </Col>
      </Row>
    </Container>

    <Link to="/project/" style={{ marginRight: '20px' }}>Project</Link>
    <Link to="/contact/" style={{ marginRight: '20px' }}>Contact</Link>
    <Link to="/about/">About</Link>
  </Layout>
)

export default IndexPage
