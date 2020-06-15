import React from "react"
import Tilt from "react-tilt"

const SourceButton = (props) => {
  return (
    <a className="source-link" href={props.link}>View Source</a>
  )
}
const ViewLive = (props) => {
  return (
    <a className="demo-link" href={props.link}>Live Site</a>
  )
}

function chooseButtons(props, category) {
  switch(category) {
    case "developer" :
      return (
          <div className="project-links">
            <SourceButton link={props.githubLink}/>
            <ViewLive link={props.demoLink} />
          </div>
      )
    case "designer" :
      return (
        <div>
          <button id="case-study" className="source-link" onClick={props.toggleModal} href={props.link}>View Case Study</button>
        </div>
      )
    case "technical writer" :
      return (
        <div>
          <a className="source-link" href={props.demoLink}>Read the Docs</a>
        </div>
      )
    default :
        return (
          <div>nothing</div>
        )
      }
    }


export default function Project(props) {
  return (
    <div>
      <h2 className="project-heading">{props.heading}</h2>
      <div className="project-box">
          <div className="project-text">
            <p>{props.summary}</p>
            <h4>Technology Used</h4>
            <ul className="tech-list">
              { props.techList.map((tech, i) => {
                return (
                <li key={i}>{tech}</li>
                )
              })
              }
            </ul>
            { chooseButtons(props, props.cat) }
          </div>
          <Tilt className="project-pic" options={{ reverse: true, scale: 1, max: 10 }} >
            <img className="Tilt-inner" src={props.src} alt=""/>
          </Tilt>
        </div> 
      </div>  
  )
}