import React from 'react'
import { SWRConfig } from 'swr'

const swrConfig = {
  fetcher: (...args) => fetch(...args).then((res) => res.json()),
}

const WrapRootElement = ({ element }) => {
  return <SWRConfig value={swrConfig}>{element}</SWRConfig>
}

export default WrapRootElement
