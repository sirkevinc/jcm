import * as React from "react"
import type { HeadFC } from "gatsby"
import Layout from "../components/Layout"

import main from "../images/jumbo.jpg"


const IndexPage = () => {
  return (
    <Layout>
      <div className="main__banner">
        <img src={main} alt="large image" />
        <div className="image__overlay">
          Jangi Consulting Management
          <br />
          Together we can envision, inspire and transform your business
        </div>
      </div>
      <div className="content">
        <h2>Digital, business and technology consulting centered on you</h2>
        <div>
          <p>At Jangi Consulting Management, we appreciate the challenges involved in running a successful business.  Managing cashflow, keeping suppliers and customers happy, meeting governance requirements, dealing with staff, product development - the list goes on and the demands and decisions are continuous and stressful.</p>

          <p>Add a global pandemic to an already suppressed economy and the challenge is multiplied many times over.  Indeed many businesses will become financially distressed over this time and may be forced to consider formal business rescue proceedings, while others will be required to restructure in order to survive in a new economic reality.</p>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
