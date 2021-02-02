import App from "next/app"
import "tailwindcss/tailwind.css"

import Layout from "../src/Layouts/BaseLayout"

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    )
  }
}

export default MyApp
