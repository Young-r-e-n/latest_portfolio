import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import {
  faShieldAlt,
  faLaptopCode,
  faToolbox,
} from "@fortawesome/free-solid-svg-icons";

import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFirst = [
  "React",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Flutter",
  "Node.js",
  "Python",
  "PHP",
  "WordPress",
  "SQL",
  "REST APIs",
  "Machine Learning",
  "TensorFlow",
  "Pandas",
];

const labelsSecond = [
  "Penetration Testing",
  "Network Security",
  "SOC Analysis",
  "Snort IDS",
  "SQL Injection Testing",
  "Linux",
  "Wireshark",
  "Nmap",
  "Burp Suite",
  "pfSense",
  "Vulnerability Assessment",
  "Router Configuration",
  "Access Point Setup",
  "LAN/WAN Troubleshooting",
];

const labelsThird = [
  "IT Support",
  "Laptop Repair",
  "PC Assembly",
  "Hardware Upgrades",
  "OS Installation",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>

        <div className="skills-grid">

          {/* SOFTWARE ENGINEERING & MACHINE LEARNING */}

          <div className="skill">
            <FontAwesomeIcon icon={faLaptopCode} size="3x" />

            <h3>Software Engineering & ML</h3>

            <p>
              I build responsive web and mobile apps with React, Node.js, and REST APIs following clean architecture. I also develop machine learning models using Python, TensorFlow, and Pandas for predictive analytics and intelligent systems.
            </p>

            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>

              {labelsFirst.map((label, index) => (
                <Chip
                  key={index}
                  className="chip"
                  label={label}
                />
              ))}
            </div>
          </div>

          {/* CYBERSECURITY & NETWORKING */}

          <div className="skill">
            <FontAwesomeIcon icon={faShieldAlt} size="3x" />

            <h3>Cybersecurity & Networking</h3>

            <p>
              I perform penetration testing, network security monitoring, and vulnerability assessments using Nmap, Burp Suite, and Wireshark. I also configure routers, access points, firewalls, and troubleshoot LAN/WAN issues for robust protection.
            </p>

            <div className="flex-chips">
              <span className="chip-title">Tools & Technologies:</span>

              {labelsSecond.map((label, index) => (
                <Chip
                  key={index}
                  className="chip"
                  label={label}
                />
              ))}
            </div>
          </div>

          {/* IT SUPPORT & HARDWARE */}

          <div className="skill">
            <FontAwesomeIcon icon={faToolbox} size="3x" />

            <h3>IT Support & Hardware</h3>

            <p>
              I provide technical support, hardware diagnostics, and repair services including laptop repair and PC assembly. I also perform hardware upgrades, OS installations, and system maintenance to always keep devices running very smoothly.
            </p>

            <div className="flex-chips">
              <span className="chip-title">Hardware & Support:</span>

              {labelsThird.map((label, index) => (
                <Chip
                  key={index}
                  className="chip"
                  label={label}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Expertise;