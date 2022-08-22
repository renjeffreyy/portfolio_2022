import * as React from "react"
import Layout from '../components/layout.component'
import { Seo }  from "../components/seo.component"

import '../styles/global.css'

const IndexPage = () => {
  return (
    <main >
      <Layout />
    </main>
  )
}

export const Head = () =>{
  return (
    <Seo />
  )
}

export default IndexPage
