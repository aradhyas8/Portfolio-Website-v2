import React from "react";
import "./experience.scss";

export const Experience = () => {
  return (
    <div className="parent">
    <div className="container vertical-tabs">
      <div class="d-flex align-items-start">
        <div
          class="nav flex-column nav-pills me-3"
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
            Fibra
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
            CIBC
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
            CS HUB
          </button>
        </div>
        <div class="tab-content" id="v-pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="v-pills-home"
            role="tabpanel"
            aria-labelledby="v-pills-home-tab"
          >
            <div className="row">
              <h2>QA Analyst @ theScore</h2>
            </div>
            <div className="row">
              <p>Jan 2023 - Present</p>
            </div>
            <ul className="points">
              <li>
                Conducting cross-platform testing (Android, iOS, and Web) to
                assess readiness for production releases of sports media and
                betting apps.
              </li>
              <li>
                Developing test cases in TestRail and executed test plans to
                ensure high-quality feature delivery, and participated in bug
                triaging, priority assessment, and coverage tracking.
              </li>
              <li>
                Collaborating with cross-functional teams to ensure adherence to
                best practices and standards in QA, actively participated in
                Scrum ceremonies, and worked with the Test Automation team to
                review, prioritize and analyze test cases for automation
                results.
              </li>
            </ul>
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-profile"
            role="tabpanel"
            aria-labelledby="v-pills-profile-tab"
          >
            <div className="row">
              <h2>Software Developer @ Fibra Inc</h2>
            </div>
            <div className="row">
              <p>Jan 2023 - Present</p>
            </div>
            <ul className="points">
              <li>
                Developing the Fibra app using Node.js and MongoDB for the
                backend and React Native for the front end.
              </li>
              <li>
                Utilizing Firebase for real-time data synchronization and user
                authentication in the Fibra app.
              </li>
              <li>
                Collaborating with a team to create a seamless and efficient
                user experience for the Fibra app through the implementation of
                various technologies.
              </li>
            </ul>
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-messages"
            role="tabpanel"
            aria-labelledby="v-pills-messages-tab">
           <div className="row">
              <h2>Backend Developer @ CS HUB, York University</h2>
            </div>
            <div className="row">
              <p>Oct 2022 - Present</p>
            </div>
            <ul className="points">
                <li>Reviewing confirmed fraud claims using internal fraud systems and policies to minimize losses and mitigate fraud for CIBC and Simplii Financial</li>
                <li>Sorting and assigning incoming fraud claims by type and mark appropriate transactions as fraud, uploading to SharePoint for assignment</li>
                <li>Deploying correct fraud information into databases, work with internal and external partners to complete investigations and reach resolution, and gather required information on suspected fraud activities with CIBC employees</li>
            </ul>
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-settings"
            role="tabpanel"
            aria-labelledby="v-pills-settings-tab">
            <div className="row">
                <h2>Backend Developer @ CSHUB ,York University</h2>
            </div>
            <div className="row"><p>Oct 2022 - Present</p></div>
            <ul className="points">
                <li>Setting up a database and integrating with payment gateways to streamline the checkout process</li>
                <li>Building APIs and implementing SSL certificates to ensure the security and confidentiality of our customers' data</li>
                <li> Monitoring performance and implementing backup systems to guarantee the reliability of the platform for our users.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Experience;
