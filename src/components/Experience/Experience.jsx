import React from "react";
import "./experience.scss";

export const Experience = () => {
  return (
    <section id="experience">
    <div class="container exp-tabs">
      <div className="exp-header">
          <h1>/Experience</h1>
        </div>
      <div class="row">
        <div class="col-md-3">
        <div
            class="nav flex-sm-column nav-pills me-3"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <button
              class="nav-link active"
              id="v-pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-home"
              type="button"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true"
            >
              Fibra
            </button>
            <button
              class="nav-link"
              id="v-pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-profile"
              type="button"
              role="tab"
              aria-controls="v-pills-profile"
              aria-selected="false"
            >
              theScore
            </button>
            <button
              class="nav-link"
              id="v-pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-profile"
              type="button"
              role="tab"
              aria-controls="v-pills-profile"
              aria-selected="false"
            >
              CIBC
            </button>
            <button
              class="nav-link"
              id="v-pills-messages-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-messages"
              type="button"
              role="tab"
              aria-controls="v-pills-messages"
              aria-selected="false"
            >
              CS HUB
            </button>
            <button
              class="nav-link"
              id="v-pills-settings-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-settings"
              type="button"
              role="tab"
              aria-controls="v-pills-settings"
              aria-selected="false"
            >
              York University
            </button>
          </div>
        </div>
        <div class="col-md-9">
        <div class="tab-content" id="v-pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="v-pills-home"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
              tabindex="0"
            >
              <div className="role-title">
                <p>Software Developer @ <a href="https://fibrainc.ca/">Fibra</a></p>
              </div>
              <div className="role-time">
                <p>January 2023-Present</p>
              </div>
              <div className="role-description">
                <ul>
                  <li>
                    Developing the Fibra app using Node.js and MongoDB for the
                    backend and React Native for the front end.
                  </li>
                  <li>
                    Utilizing Firebase for real-time data synchronization and
                    user authentication in the Fibra app.
                  </li>
                  <li>
                    Collaborating with a team to create a seamless and efficient
                    user experience for the Fibra app through the implementation
                    of various technologies.
                  </li>
                </ul>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="v-pills-profile"
              role="tabpanel"
              aria-labelledby="v-pills-profile-tab"
              tabindex="0"
            >
              <div className="role-title">
                <p>QA Analyst @ <a href="https://www.thescore.com/">theScore</a></p>
              </div>
              <div className="role-time">
                <p>January 2023-Present</p>
              </div>
              <div className="role-description">
                <ul>
                  <li>Upcoming</li>
                </ul>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="v-pills-disabled"
              role="tabpanel"
              aria-labelledby="v-pills-disabled-tab"
              tabindex="0"
            >
              <div className="role-title">
                <p>Intermediate Business Analyst @ <a href="https://www.cibc.com/en/personal-banking.html">CIBC</a></p>
              </div>
              <div className="role-time">
                <p>January 2023-Present</p>
              </div>
              <div className="role-description">
                <ul>
                  <li>
                    Reviewing confirmed fraud claims using internal fraud
                    systems and policies to minimize losses and mitigate fraud
                    for CIBC and Simplii Financial
                  </li>
                  <li>
                    Sorting and assigning incoming fraud claims by type and mark
                    appropriate transactions as fraud, uploading to SharePoint
                    for assignment
                  </li>
                  <li>
                    Deploying correct fraud information into databases, work
                    with internal and external partners to complete
                    investigations and reach resolution, and gather required
                    information on suspected fraud activities with CIBC
                    employees
                  </li>
                </ul>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="v-pills-messages"
              role="tabpanel"
              aria-labelledby="v-pills-messages-tab"
              tabindex="0"
            >
              <div className="role-title">
                <p>Software Developer @ <a href="https://www.cshub.tech/">CS HUB</a></p>
              </div>
              <div className="role-time">
                <p>October 2022-Present</p>
              </div>
              <div className="role-description">
                <p>
                  As a Software Developer at CSHUB, I am contributing in
                  developing the merchandise store, as well as having worked as
                  Web Developer Lead designing and building the Local Hack Day
                  website.
                </p>
                <ul>
                  <li>
                    Setting up a database and integrating with payment gateways
                    to streamline the checkout process
                  </li>
                  <li>
                    Building APIs and implementing SSL certificates to ensure
                    the security and confidentiality of our customers' data
                  </li>
                  <li>
                    Monitoring performance and implementing backup systems to
                    guarantee the reliability of the platform for our users.
                  </li>
                </ul>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="v-pills-settings"
              role="tabpanel"
              aria-labelledby="v-pills-settings-tab"
              tabindex="0"
            >
              <div className="role-title">
                <p>Student Mentor @ <a href="https://yorkinternational.yorku.ca/">York International</a></p>
              </div>
              <div className="role-time">
                <p>September 2022-Present</p>
              </div>
              <div className="role-description">
                <ul>
                  <li>
                    Mentoring students from Lassonde and guiding them for EECS
                    assignments, choosing courses, and having a smooth
                    transition in the university system throughout the year.
                  </li>
                  <li>
                    Facilitating when a student may be experiencing difficulties
                    and developing a plan of support with the guidance of
                    Student Support Staff.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Experience;
