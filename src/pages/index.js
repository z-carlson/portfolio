import React, { useState } from "react"
import JSONData from "../content/projects.json"
import Layout from "../components/layout"
import Project from "../components/project"
import "./index.css"

const Button = (props) => {
  return (
    <button className="category-select" onClick={() => props.filterHandler(props.category)}>{props.category}</button>
  )
} 

function Home() {
  const [myFilter, setFilter] = useState('View All')

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  }
 
  return (
    <Layout>
      <p>This site is a work in progress. Thank you!</p>

      <div className="main-blurb">
        <h1><span className="highlight"></span>Work Samples</h1>
        <p>Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.</p>
        <p>Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.</p>
      </div>
      <div className="projects-container"> 
        <div className="category-buttons">
          <Button category={"Developer"}  filterHandler={handleFilterChange}/>
          <Button category={"Technical Writer"} filterHandler={handleFilterChange}/>
          <Button category={"Designer"} filterHandler={handleFilterChange}/>
          <Button category={"View All"} filterHandler={handleFilterChange}/>
        </div>
        <div className="projects-list">
          { myFilter === 'View All' 
            ?  JSONData.map(( project, i ) => {
                return (
                <Project
                  key={i} 
                  cat={project.cat}
                  heading={project.title}
                  summary={project.summary}
                  techList={project.tech}
                  src={project.image}
                  githubLink={project.gitLink}
                  demoLink={project.demoLink}
                />
              )
            })
          : JSONData.map(( project, i ) => {
            {if (project.cat === myFilter.toLowerCase()) {
              return (
              <Project
                key={i} 
                cat={project.cat}
                heading={project.title}
                summary={project.summary}
                techList={project.tech}
                src={project.image}
                githubLink={project.gitLink}
                demoLink={project.demoLink}
              />
            )
          }
        }
          })}
        </div>
      </div>
    </Layout>
  )
}


export default Home; 
