import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>exported project</title>
        <meta property="og:title" content="exported project" />
        <meta
          property="og:description"
          content="StreamPay - Web3 Payments Platform\n\nA complete suite of Web3 payment tools for merchants &amp; creators"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/abea1526-7e15-4d12-beec-ca3d29f747ca/f696ac0a-96e4-47d8-b158-7e5f7701cd2e?org_if_sml=1"
        />
      </Helmet>
      <div className="home-sidebar">
        <nav className="home-nav Content">
          <img
            alt="logo"
            src="/playground_assets/streampay%20logo-200h.png"
            className="home-logo"
          />
          <span className="home-dashboard">Dashboard</span>
          <Link to="/pay-links" className="home-pay-links">
            Pay Links
          </Link>
          <Link to="/pay-streams" className="home-pay-streams">
            Pay Streams
          </Link>
          <Link to="/invoices" className="home-invoices">
            Invoices
          </Link>
          <span className="home-transactions">Transactions</span>
          <span className="home-balances">Balances</span>
          <span className="home-address-book">Address Book</span>
          <span className="home-stream-x">StreamX</span>
          <span className="home-settings">Settings</span>
          <h1 className="home-stream-pay">
            <span className="home-text">Stream</span>
            <span className="home-text01">Pay</span>
          </h1>
        </nav>
        <div className="home-community-icon-group">
          <svg viewBox="0 0 950.8571428571428 1024" className="home-icon">
            <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
          </svg>
          <svg viewBox="0 0 877.7142857142857 1024" className="home-icon2">
            <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
          </svg>
          <svg viewBox="0 0 602.2582857142856 1024" className="home-icon4">
            <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
          </svg>
        </div>
      </div>
      <div className="home-pay-links-component">
        <div className="home-card-component-pay-links">
          <button className="home-button button">Pay Links</button>
        </div>
        <span className="home-text02">
          <span>Pay Links</span>
        </span>
        <img
          alt="Cardtextfieldanddetails1264"
          src="/playground_assets/cardtextfieldanddetails1264-0fc-200h.png"
          className="home-cardtextfieldanddetails"
        />
        <span className="home-text04">
          <span>Pay Links</span>
        </span>
        <img
          alt="Ellipse1"
          src="/playground_assets/ellipse71265-hzd-200h.png"
          className="home-ellipse7"
        />
        <span className="home-text06">
          <span>Total volume</span>
        </span>
        <span className="home-text08">
          <span>Total earned</span>
        </span>
        <span className="home-text10">
          <span>
            Setup one-time payment link for e-commerce, invoices, tips, and more
            in single steps
          </span>
        </span>
        <span className="home-text12">
          <span>26</span>
        </span>
        <span className="home-text14">
          <span>$14.800 USDC</span>
        </span>
        <img
          alt="link1266"
          src="/playground_assets/link1266-15pv.svg"
          className="home-link"
        />
      </div>
      <div className="home-pay-stream-component">
        <div className="home-group2">
          <div className="home-pay-streams-component">
            <div className="home-pay-streams-component1">
              <div className="home-card-component-sample">
                <button className="home-button1 button">
                  <span className="home-text16">
                    <span>Pay Streams</span>
                    <br></br>
                  </span>
                </button>
              </div>
              <span className="home-text19">
                <span>Pay Streams</span>
              </span>
              <img
                alt="Cardtextfieldanddetails1337"
                src="/playground_assets/cardtextfieldanddetails1337-gzpr-200h.png"
                className="home-cardtextfieldanddetails1"
              />
              <span className="home-text21">
                <span>Pay Streams</span>
              </span>
              <img
                alt="Ellipse2"
                src="/playground_assets/ellipse71337-smg8-200h.png"
                className="home-ellipse71"
              />
              <img
                alt="StreamIcon1337"
                src="/playground_assets/streamicon1337-t59qt-200w.png"
                className="home-stream-icon"
              />
              <span className="home-text23">
                <span>Total volume</span>
              </span>
              <span className="home-text25">
                <span>Total earned</span>
              </span>
              <span className="home-text27">
                <span>
                  Setup your recurring for BaaS subscriptions, digital content
                  and more in a few clicks
                </span>
              </span>
              <span className="home-text29">
                <span>1.480.000</span>
              </span>
              <span className="home-text31">
                <span>$14.800 USDC</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-container1">
        <div className="home-container2"></div>
      </div>
    </div>
  )
}

export default Home
