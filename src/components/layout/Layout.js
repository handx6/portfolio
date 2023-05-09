import React from 'react'
import Navigation from './Navigation'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="scroll-smooth">
        <Navigation/>
        <main>{children}</main>
        <Footer />
    </div>
  )
}
