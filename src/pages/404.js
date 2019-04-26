import React from "react"

import FrameLayout from "../components/Layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <FrameLayout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </FrameLayout>
)

export default NotFoundPage
