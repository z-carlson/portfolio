import React from "react"
import styles from "./experience.module.css"

export default function Experience(props) {
  return (
    <div>
      <h3 className={styles.title}>{props.title}</h3>
      <h4 className={styles.date}>{props.dates}</h4>
      <h5 className={styles.location}>{props.location}</h5>
      <p className={styles.summary}>{props.summary}</p>
    </div>
  )
}