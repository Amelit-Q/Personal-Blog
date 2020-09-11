import React from "react"
import Container from "../components/container"
import styles from "./about-css-modules.module.css"

export default function About() {
  const User = props => (
    <div className={styles.user}>
      <img src={props.avatar} className={styles.avatar} alt="img" />
      <div className={styles.description}>
        <h2 className={styles.username}>{props.username}</h2>
        <p className={styles.excerpt}>{props.excerpt}</p>
      </div>
    </div>
  )
  return (
    <div>
      <Container>
        <h1>About CSS modules</h1>
        <p>Css Modules is here</p>
        <User
          username="Jane Doe"
          avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
          excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        />
        <User
          username="Robert Smith"
          avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
          excerpt="I'm Bob Smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        />
      </Container>
    </div>
  )
}
