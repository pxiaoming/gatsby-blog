import React from "react"
import PropTypes from "prop-types"
import { Layout, Row, Col, BackTop } from 'antd'
import Sider from "../Sider"
import Header from "../Header"
import "./index.scss"


const siderLayout = { xxl: 4, xl: 5, lg: 5, sm: 0, xs: 0 }
const contentLayout = { xxl: 20, xl: 19, lg: 19, sm: 24, xs: 24 }

const FrameLayout = ({ children }) => (
    <Layout className="app-container">
      <Header />
      <Row className="main-wrapper">
        <Col {...siderLayout}>
          <Sider />
        </Col>
        <Col {...contentLayout}>
          <div className="content-wrapper">
            {children}
          </div>
        </Col>
      </Row>
      <BackTop target={() => document.querySelector('.content-wrapper')} />
    </Layout>
)

FrameLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default FrameLayout