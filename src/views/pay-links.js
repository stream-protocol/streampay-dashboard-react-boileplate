import React from 'react'

import { Helmet } from 'react-helmet'

import './pay-links.css'

const PayLinks = (props) => {
  return (
    <div className="pay-links-container">
      <Helmet>
        <title>Pay-Links - exported project</title>
        <meta property="og:title" content="Pay-Links - exported project" />
        <meta
          property="og:description"
          content="StreamPay - Web3 Payments Platform\n\nA complete suite of Web3 payment tools for merchants &amp; creators"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/abea1526-7e15-4d12-beec-ca3d29f747ca/f696ac0a-96e4-47d8-b158-7e5f7701cd2e?org_if_sml=1"
        />
      </Helmet>
    </div>
  )
}

export default PayLinks
