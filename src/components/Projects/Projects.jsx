import React from "react";
import "./projects.scss";
import { FiFolder } from "react-icons/fi";
import { AiOutlineGithub } from "react-icons/ai";
import { RiShareForward2Line } from "react-icons/ri";

const Projects = () => {
  return (
    <div className="parent projects">
      <div className="container">
      <div className="proj-header">
          <h1>/Projects</h1>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <div className="icon mr-3">
                  <div className="folder">
                    <FiFolder />
                  </div>
                </div>
                <div className="git-share">
                  <AiOutlineGithub />
                  <RiShareForward2Line />
                </div>
                <div className="content">
                  <h5 className="card-title">Face Track Attendance</h5>
                  <p className="card-text">
                    This program records facial attendance by detecting and
                    recognizing faces in real-time video and saving the data to
                    a .csv file with a timestamp.
                  </p>
                  <div className="card-footer"><p className="tools">Python, openCV</p></div>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <div className="icon mr-3">
                  <div className="folder">
                    <FiFolder />
                  </div>
                </div>
                <div className="git-share">
                  <AiOutlineGithub />  
                  <RiShareForward2Line />
                </div>
                <div className="content">
                  <h5 className="card-title">Sorting Algorithm Visualizer</h5>
                  <p className="card-text">
                    A sorting visualizer displaying Bubble, Insertion, and
                    Selection Sort algorithms with array visualization.
                  </p>
                  <p className="tools">Javascript, React</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <div className="icon mr-3">
                  <div className="folder">
                    <FiFolder />
                  </div>
                </div>
                <div className="git-share">
                  <AiOutlineGithub />
                  <RiShareForward2Line />
                </div>
                <div className="content">
                  <h5 className="card-title">Talk-Smart</h5>
                  <p className="card-text">
                    A voice assistant with multiple functionalities including
                    music playback, timekeeping, Wikipedia information,
                    joke-telling, and weather updates.
                  </p>
                  
                  <p className="tools">Python</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <div className="icon mr-3">
                  <div className="folder">
                    <FiFolder />
                  </div>
                </div>
                <div className="git-share">
                  <AiOutlineGithub />
                  <RiShareForward2Line />
                </div>
                <div className="content">
                  <h5 className="card-title">For The Horses</h5>
                  <p className="card-text">
                    Animal rescue app that won first prize at YUHacks 2022 with
                    search, dashboard, adopter matching and messaging features.
                  </p>
                  <p className="tools">Javascript,Node.js, React.js</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <div className="icon mr-3">
                  <div className="folder">
                    <FiFolder />
                  </div>
                </div>
                <div className="git-share">
                  <AiOutlineGithub />
                  <RiShareForward2Line />
                </div>
                <div className="content">
                  <h5 className="card-title">Data Visualizer</h5>
                  <p className="card-text">
                    EECS 3311 project for York University in Fall 2022 analyzing
                    World Bank API data in visual format.
                  </p>
                  <p className="tools">Java, REST APIs, Swing</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <div className="icon mr-3">
                  <div className="folder">
                    <FiFolder />
                  </div>
                </div>
                <div className="git-share">
                  <AiOutlineGithub />
                  <RiShareForward2Line />
                </div>
                <div className="content">
                  <div className="card-title">
                    <h5>CS HUB: LHD</h5>
                  </div>
                  <p className="card-text">
                    Designed and Developed the CS HUB: Local Hack Day 2023
                    Website.
                  </p>
                  <div className="tools">
                    <p>Javascript, Bootstrap, React.js</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
