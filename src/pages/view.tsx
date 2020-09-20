import React from 'react'
import { Link, graphql, useStaticQuery, PageProps } from 'gatsby'
import useSWR from 'swr'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Main = ({ location }: PageProps) => {
  const queryData = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const siteTitle = queryData?.site?.siteMetadata?.title

  const { data: ditto } = useSWR('https://pokeapi.co/api/v2/pokemon/ditto')
  const { data: dittoForm, error } = useSWR(
    ['https://pokeapi.co/api/v2/pokemon-form', ditto?.id],
    (url, id) =>
      fetch(`${url}/${id}`)
        .then((res) => res.json())
        .then(async (data) => {
          await new Promise((res) => setTimeout(res, 1500))
          return data
        })
  )

  if (error) return 'oops... somthing wrong!'
  if (!ditto || !dittoForm) return <div>loading...</div>

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="intro" />
      <h4>{ditto?.species?.name}</h4>
      <img src={dittoForm?.sprites?.front_default} alt={ditto?.species?.name} />
      <div>
        <Link to="/">home</Link>
      </div>
    </Layout>
  )
}

export default Main
