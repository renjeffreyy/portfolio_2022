import * as React from "react"
import Layout from '../components/layout.component'
import { Seo }  from "../components/seo.component"
import { Portfolio } from "../components/portfolio.component"

import '../styles/global.css'

const IndexPage = () => {
  return (
    <main >
      <Layout>
        <Portfolio />
      </Layout>
    </main>
  )
}

export const Head = () =>{
  return (
    <Seo title="Portfolio" />
  )
}

export default IndexPage
