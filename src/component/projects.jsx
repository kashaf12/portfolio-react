import React from "react";
import PropTypes from "prop-types";
import vote from "../img/vote.jpg";

export default class Projects extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id="my-projects" className="container-fluid bg-light mt-5">
          <div className=" project-container container bg-light pb-5">
            <h1
              id="projects"
              className={"text-center " + this.props.fadeInRight}
            >
              Projects
            </h1>
            <div className="row my-5">
              <div
                className={
                  "testbg col-12 col-sm-12 col-md-4 " + this.props.fadeIn
                }
              >
                <div className="overlay">
                  <div className="text">
                    <h2>Vote</h2>
                  </div>
                  <div>
                    <button
                      id="vmarine-button"
                      className="project-button"
                      onClick={() => {
                        var modalBG = document.getElementById("gallery-card");
                        var marineModal = document.getElementById("vote");
                        modalBG.style.display = "block";
                      }}
                    >
                      Coming Soon
                    </button>
                  </div>
                </div>
              </div>
              <div
                className={
                  "aguabg col-12 col-sm-12 col-md-4 " + this.props.fadeIn
                }
              >
                <div className="overlay">
                  <div className="text">
                    <h2>1ML Android Application</h2>
                  </div>
                  <div>
                    <button
                      id="agua-button"
                      className="project-button"
                      onClick={() => {
                        console.log("clicked 1ml");
                      }}
                    >
                      Link
                    </button>
                  </div>
                </div>
              </div>
              <div
                className={
                  "todobg col-12 col-sm-12 col-md-4 " + this.props.fadeIn
                }
              >
                <div className="overlay">
                  <div className="text">
                    <h2>Alma web</h2>
                  </div>
                  <div>
                    <button
                      id="todo-button"
                      className="project-button"
                      onClick={() => {
                        console.log("clicked alma web");
                      }}
                    >
                      Link
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*hidden modals*/}
        <div id="gallery-card">
          <div id="vote" className="modal-card">
            <div className="visual">
              <img src={vote} alt="" />
            </div>
          </div>

          <div id="agualuz" className="modal-card">
            <div className="visual">
              <img src={vote} alt="" />
            </div>
          </div>

          <div id="todolist" className="modal-card">
            <div className="visual">
              <img src={vote} alt="" />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Projects.propTypes = {
  bounceIn: PropTypes.string,
  fadeInLeft: PropTypes.string,
  fadeInRight: PropTypes.string,
  fadeIn: PropTypes.string,
  tada: PropTypes.string
};
