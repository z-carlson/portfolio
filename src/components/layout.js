import React from 'react'
import styles from "./layout.module.css"
import { Link } from "gatsby"

const ListLink = props => (
  <li >
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  return (
    <div className={styles.layout} >
      <header>
        <Link to="/" >
          <h3>Zachary Carlson</h3>
        </Link>
        <ul >
          <ListLink to="/resume/">Resume</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <div className="social-links">
          <a href="https://github.com/z-carlson/">
            <img className={styles.socials} src="../GitHub-Mark-Light-32px.png" alt="github logo"/>
          </a>
          <a  href="https://codepen.io/carlsoza">
            <img className={styles.socials} src="../codepen logo white.png" alt="codepen logo"/>
          </a>
          <a  href="www.linkedin.com/in/carlsonzachary">
            <img className={styles.socials} src="../LI-In-Bug.png" alt="LinkedIn Logo"/>
          </a>                
        </div>
      </footer>
    </div>
  )
}
