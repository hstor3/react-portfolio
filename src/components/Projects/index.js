import React, { Component } from "react";
import "./index.css";
import Projects from "../../utils/projects.json";
// import '../../utils/assets';

class ProjectPage extends Component {
  state = {
    projects: Projects,
    projectIndex: 0,
  };

  componentDidMount() {
    console.log(this.state);
  }

  nextBtn() {
    let currentIndex = this.state.projectIndex;
    // debugger;
    const newIndex = ++currentIndex % this.state.projects.length;
    this.setState({ projectIndex: newIndex });
  }

  backBtn() {
    let index = this.state.projectIndex;
    if (index == 0) {
      index = this.state.projects.length - 1;
    } else {
      index--;
    }
    this.setState({ projectIndex: index });
  }

  projectInfo() {
    if (this.state.projects.length) {
      // return this.state.projects.map((project, index) => {
      const project = this.state.projects[this.state.projectIndex];
      return (
        // <div>
        <div className="card text-center" id="projectCard">
          <img className="card-img" alt="images examples of the projects" src={this.state.projects.screenShot} />
           
          <div className="card-body"></div>
          <h3 className="card-title">{project.projectTitle}</h3>
          <a target="_blank" className='deployed-link' href={project.projectUrl}>
            {project.projectUrl}
          </a>
          <a
            target="_blank"
            className="gitHub text-center"
            href={project.projectGitHub}
          >
            {project.projectGitHub}
          </a>
          <div className="text-center">
            This project includes: {project.tech}
          </div>
        </div>
      );
      // });
    }
  }
  render() {
    const projectInfo = this.projectInfo();
    return (
      <section id="work-stuff" className="stuff" alt="section with my work">
        <h2>Projects</h2>
        {projectInfo}
        <button
          className="nextBtn btn btn-primary"
          onClick={() => this.nextBtn()}
        >
          Next
        </button>
        <button
          className="backBtn btn btn-primary"
          onClick={() => this.backBtn()}
        >
          Back
        </button>
        {/* </div> */}
      </section>
    );
  }
}

export default ProjectPage;
