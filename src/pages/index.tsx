import React from 'react'
import { Link, graphql, useStaticQuery, PageProps } from 'gatsby'
import useSWR, { SWRConfig } from 'swr'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Main = ({ location }: PageProps) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const siteTitle = data?.site?.siteMetadata?.title

  return (
    <SWRConfig>
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />
        <div>hello world</div>
        <ul>
          <li>
            <Link to="/view">view</Link>
          </li>
          <li>
            <Link to="/spec">spec</Link>
          </li>
        </ul>
      </Layout>
    </SWRConfig>
  )
}

export default Main
