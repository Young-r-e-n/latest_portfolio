import React from "react";
import "../assets/styles/Project.scss";

import comfortcircle from "../assets/images/comfortcircle.png";
import tenderfocus from "../assets/images/tenderfocus.png";
import airce from "../assets/images/airce.png";
import emotiondetection from "../assets/images/emotiondetection.png";
import networkintrusion from "../assets/images/networkintrusion.png";
import IOT from "../assets/images/IOT.png";

function Project() {
  return (
    <div className="projects-container" id="projects">

      <h1>Projects</h1>

      <div className="projects-grid">

        {/* COMFORTCIRCLE */}
        <div className="project">
          <a
            href="https://comfortcircle.co.ke"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={comfortcircle}
              className="zoom"
              alt="comfortcircle platform"
              width="100%"
            />
          </a>

          <a
            href="https://comfortcircle.co.ke"
            target="_blank"
            rel="noreferrer"
          >
            <h2>ComfortCircle Platform</h2>
          </a>

          <p>
            Developed a full-stack welfare and micro-insurance platform
            with an admin dashboard and M-Pesa payment integration.
            Implemented member management, contributions tracking,
            and automated transaction processing.
          </p>
        </div>

        {/* TENDER FOCUS */}
        <div className="project">
          <a
            href="https://tenderfocus.co.ke"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={tenderfocus}
              className="zoom"
              alt="tenderfocus platform"
              width="100%"
            />
          </a>

          <a
            href="https://tenderfocus.co.ke"
            target="_blank"
            rel="noreferrer"
          >
            <h2>TenderFocus Platform</h2>
          </a>

          <p>
            Built a tender management and consultancy platform with
            a fully functional admin dashboard and M-Pesa integration.
            Enabled document handling, client management, and payment workflows.
          </p>
        </div>

        {/* AIRCE */}
        <div className="project">
          <a
            href="https://airce.org"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={airce}
              className="zoom"
              alt="airce website"
              width="100%"
            />
          </a>

          <a
            href="https://airce.org"
            target="_blank"
            rel="noreferrer"
          >
            <h2>AIRCE.org Website</h2>
          </a>

          <p>
            Designed and developed a responsive organizational website
            focused on performance, accessibility, and structured content
            delivery for public-facing communication.
          </p>
        </div>

        {/* EMOTION DETECTION ML */}
        <div className="project">
          <a
            href="https://github.com/Young-r-e-n/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={emotiondetection}
              className="zoom"
              alt="emotion detection ml"
              width="100%"
            />
          </a>

          <a
            href="https://github.com/your-repo"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Emotion Detection (ML)</h2>
          </a>

          <p>
            Built a deep learning model using LSTM/CNN techniques
            to classify human emotions from speech/text datasets.
            Focused on feature extraction and sequence modeling.
          </p>
        </div>

        {/* INTRUSION DETECTION SYSTEM */}
        <div className="project">
          <a
            href="https://github.com/your-repo"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={networkintrusion}
              className="zoom"
              alt="intrusion detection system"
              width="100%"
            />
          </a>

          <a
            href="https://github.com/Young-r-e-n/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Network Intrusion Detection System</h2>
          </a>

          <p>
            Developed a machine learning-based intrusion detection system
            to detect anomalous network traffic and potential cyber attacks
            using Python and supervised learning models.
          </p>
        </div>

        {/* IOT INCIDENT MANAGEMENT */}
        <div className="project">
          <a
            href="https://github.com/Young-r-e-n/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={IOT}
              className="zoom"
              alt="iot incident management system"
              width="100%"
            />
          </a>

          <a
            href="https://github.com/your-repo"
            target="_blank"
            rel="noreferrer"
          >
            <h2>IoT Incident Management System</h2>
          </a>

          <p>
            Built an IoT-enabled incident reporting and monitoring system
            for real-time event tracking, alerts, and structured response
            workflows using connected devices and backend APIs.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Project;