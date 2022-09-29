import * as React from "react"
import Layout from '../components/layout.component'
import { Seo }  from "../components/seo.component"
import  InProgress from "../components/in-progress.component"

import '../styles/global.css'

const IndexPage = () => {
  return (
    <main >
      <Layout>
        <InProgress />
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
