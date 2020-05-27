import React from "react"
import { Link } from "gatsby"
import { FaHome,FaCoffee,FaReadme } from 'react-icons/fa'
import { Nav } from 'react-bootstrap'

const Menu = () => (
    <div> 
      <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
            activeKey="/home"
            onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            >
            <Nav.Item>
              <Nav.Link><Link to="/project/"><FaHome /> Project</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link><Link to="/contact/"><FaCoffee /> Contact</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link><Link to="/about/"><FaReadme /> About</Link></Nav.Link>
            </Nav.Item>
      </Nav>
    </div>
  )
  
  export default Menu