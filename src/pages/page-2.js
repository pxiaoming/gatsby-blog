import React from "react"
import { Link } from "gatsby"

import FrameLayout from "../components/Layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <FrameLayout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </FrameLayout>
)

export default SecondPage
