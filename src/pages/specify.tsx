import React from 'react'
import { Link, graphql, useStaticQuery, PageProps } from 'gatsby'
import Image, { FluidObject } from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'

interface ChildImageSharpProps {
  childImageSharp: {
    fluid: FluidObject
  }
}

type FluidProps = {
  originalName: string
} & FluidObject

const Specify = ({ location }: PageProps) => {
  const data = useStaticQuery(graphql`
    query GatsbyLogoQuery {
      allFile(filter: { absolutePath: { regex: "/-icon.+/" } }) {
        totalCount
        nodes {
          childImageSharp {
            fluid(maxWidth: 500) {
              aspectRatio
              base64
              sizes
              src
              srcSet
              originalName
            }
          }
        }
      }
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const siteTitle = data?.site?.siteMetadata?.title
  const files = data?.allFile.nodes.map(
    (n: ChildImageSharpProps) => n.childImageSharp.fluid
  )

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="spec" />

      <h4 style={{ textAlign: 'center' }}>사용 기술</h4>
      {files.map((f: FluidProps) => {
        return (
          <div key={f.src} style={{ width: '50vw', margin: 'auto' }}>
            <h4>{f.originalName.split('-')[0]}</h4>
            <Image fluid={f} />
          </div>
        )
      })}

      <Link to="/">home</Link>
    </Layout>
  )
}

export default Specify
