import React, { Component } from "react";
import "./index.css";
import Projects from "../../utils/projects.json";

class ProjectPage extends Component {
state = {
  projects: Projects
}

componentDidMount() {
  console.log(this.state);
}

  render() {
    return (
      <section id="work-stuff" className="stuff" alt="section with my work">
        <h2>Work</h2>
        <p></p>

        <div class="card" id="projectCard"></div>
      </section>
    );
  }
}

export default ProjectPage;
