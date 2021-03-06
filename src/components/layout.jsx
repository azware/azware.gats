/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./template/header"
import Menu from "./template/menu"
import "./style/layout.css"
import Footer from "./template/footer"

import { Container,Row,Col } from 'react-bootstrap'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Container 
        style={{
          background: `#ecf0f5`,
          border: `2px solid #ecf0f5`,
          borderRadius: `5px`,
          marginTop:`20px`,
          marginBottom:`20px`,
        }}
      >
        <Row>
          <Col sm={12}><Header siteTitle={data.site.siteMetadata.title} /></Col>
        </Row>
        <Row>
          <Col sm={2}><Menu /></Col>
          <Col sm={10}>            
            <div
              style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `0 1.0875rem 1.45rem`,
              }}
            >
              <main>{children}</main>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={12}><Footer /></Col>
        </Row>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
