import React, { useState } from "react";
import Layout from "../components/layout";
import styles from "./contact.module.css"

function Contact() {


  return (
    <Layout>
      <h1>CONTACT</h1>
      <div className={styles.container}>
        <div className={`${styles.items} ${styles.neuomorphism}`}>
          <a href="mailto:connect@zachary-carlson.com">
            <img className={styles.icons} src="../mail icon.svg" alt="mail icon"/>
            <h4>connect@zachary-carlson.com</h4>
          </a>
        </div>
        <div className={`${styles.items} ${styles.neuomorphism}`}>
          <a href="https://github.com/z-carlson">
            <img className={styles.icons} src="../GitHub-Mark-64px.png" alt="github logo"/>
            <h4>github.com/z-carlson</h4>
          </a>
        </div>
        <div className={`${styles.items} ${styles.neuomorphism}`}>
          <a href="https://codepen.io/carlsoza">
            <img className={styles.icons} src="../codepen logo black.png" alt="codepen logo"/>
            <h4>codepen.io/carlsoza</h4>
          </a>
        </div>
        <div className={`${styles.items} ${styles.neuomorphism}`}>
          <a href="https://www.linkedin.com/in/carlsonzachary/">
            <img className={styles.icons}  src="../LI-In-Bug black.png" alt="linked in logo"/>
            <h4>linkedin.com/in/carlsonzachary/</h4>
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default Contact;