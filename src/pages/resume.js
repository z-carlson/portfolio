import React from 'react';
import Layout from '../components/layout'
import experience from "../content/experience.json"
import education from "../content/education.json"
import Education from "../components/education"
import Experience from "../components/experience"
import styles from './resume.module.css'

// const Experience = (props) => {
//   return (
//     <div>
//       <h3 className={styles.title}>{props.title}</h3>
//       <h4 className={styles.date}>{props.dates}</h4>
//       <h5 className={styles.location}>{props.location}</h5>
//       <p className={styles.summary}>{props.summary}</p>
//     </div>
//   )
// }


function Resume() {
  return (
    <Layout>
      <div className={styles.resumeWrapper}>     
        <h1>RESUME</h1>
        <h2>Experience</h2>
        {experience.map((job, i) => {
          return (
           <Experience
            key={i} 
            title={job.title}
            dates={job.dates}
            location={job.location}
            summary={job.summary}
          /> 
          )
        })}
        
        <h2>Education</h2>
        {education.map((school, i) => {
          return (
            <Education
              key={i}  
              school={school.school}
              grad={school.grad}
              program={school.program}
              gpa={school.gpa}
            /> 
          )
        })}
        <h2>Continued Learning</h2>
        <p>I love learning and continue to develop new skills as often as possible. Following are some of the recent courses and programs I've completed: </p>
        <ul className={styles.learningList}>
          <li><a href="https://www.udemy.com/certificate/UC-022bce85-7955-41c1-b440-8ffc1bdefd97/">The Complete Web Developer in 2020: Zero to Master | Udemy.com</a></li>
          <li><a href="https://www.interaction-design.org/zachary-carlson/certificate/course/fltqnHSHvXsBrQpNxg?certificateType=course">Web Design for Usability | Interaction Design Foundation</a> </li>
          <li><a href="https://www.interaction-design.org/zachary-carlson/certificate/course/fltqnHSHvVXVkDJ4cs?certificateType=course">Become a UX Designer from Scratch | Interaction Design Foundation</a> </li>
          <li><a href="https://www.interaction-design.org/zachary-carlson/certificate/course/fltqnHSHvVXVjMLB2l?certificateType=course">Human-Computer Interaction - HCI | Interaction Design Foundation</a> </li>
          <li><a href="https://www.udemy.com/certificate/UC-QCUAYH5E/">The Complete Cyber Security Course: Network Security | Udemy.com</a></li>
          <li><a href="https://www.udemy.com/certificate/UC-B9EO1QN2/">The Complete Cyber Security Course: Hackers Exposed | Udemy.com</a></li>
        </ul>
        </div>
    </Layout>
  )
}

export default Resume;