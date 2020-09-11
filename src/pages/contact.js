import React from "react"
import { Link } from "gatsby"
import Header from "../components/Header"

export default function Contact() {
  return (
    <div style={{ color: "red" }}>
      <Link to="/">Home</Link>
      <Header headerText="Contact" />
      <p>Send us a message</p>
    </div>
  )
}
