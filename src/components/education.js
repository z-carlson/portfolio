import React from "react"
import styles from "./education.module.css"


export default function Education(props) {
  return (
    <div>
      <h3 className={styles.school}>{props.school}</h3>
      <h4 className={styles.grad}>{props.grad}</h4>
      <h4 className={styles.program}>{props.program}</h4>
      <h4 className={styles.gpa}>{props.gpa}</h4>
    </div>
  )
}