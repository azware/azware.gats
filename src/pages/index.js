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
      Hi, Welcome to my site...
    </Alert>

    <Jumbotron>
      <h1>Hello, world! <FaCoffee /></h1>
      <p>
        This is just a simple site. 
      </p>
      <p>
        <Button variant="primary">Learn more</Button>
      </p>
    </Jumbotron>
    <Row>
      <Col sm={12}>
        <p className="mb-0">
          Just a sample images
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
