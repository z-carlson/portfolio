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

const Modal = (props) => {
  return (
    <div className="modal-container" onClick={props.toggle}>
      <div className="modal-content">
        <button className="toggle-modal" onClick={props.toggle}>X</button>
        <h2>Case Study: Nonprofit Web Design</h2>
        <p>Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.</p>
        <p>Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.</p>
        <h3>User Research</h3>
        <p>Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.</p>
        <img src="../Analysis process.PNG.png" alt=""/>
        <p>Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.</p>
        <p>Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.</p>
        <img src="../Analysis process.PNG.png" alt=""/>

        <p>Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.</p>
        <h3>Prototyping</h3>
        <p>Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.</p>
        <p>Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.</p>
        <h3>Final Design Proposal</h3>
        <p>Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.</p>
        <img src="../Analysis process.PNG.png" alt=""/>

        <p>Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.</p>
      </div>
    </div>
  )
}

function Home() {
  const [myFilter, setFilter] = useState('View All')
  const [showModal, setModal] = useState(false)

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  }

  const toggleModal = () => {
    const background = document.querySelector("body");
    console.log(background);
    
    setModal(!showModal);

    if (!showModal) {
      background.style.setProperty('overflow', 'hidden');
    } else {
      background.style.setProperty('overflow', 'scroll');
    }
  }
 
  return (
    <Layout>
      {showModal ? <Modal toggle={toggleModal} /> : <div></div>}
      <h1>Work Samples</h1>
      <div className="main-blurb">
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
                  toggleModal={toggleModal}
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
                toggleModal={toggleModal}
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
