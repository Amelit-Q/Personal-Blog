import React from "react"
import Header from "../components/Header"
import { Link } from "gatsby"

export default function About() {
  return (
    <div style={{ color: "teal" }}>
      <Link to="/contact/">Contact</Link>
      <Header headerText="About Gatsby" arbitraryPhrase="is arbitrary" />
      <Header headerText="that was pretty cool" />
      <p>Wow such a great staff</p>
    </div>
  )
}
