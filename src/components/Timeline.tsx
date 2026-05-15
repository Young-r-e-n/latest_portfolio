import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faShieldHalved,
  faNetworkWired,
  faLaptopCode,
  faScrewdriverWrench,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="experience">
      <div className="items-container">

        <h1>Professional Experience</h1>

        <VerticalTimeline>

{/* CYBERSECURITY */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - Present"
            iconStyle={{ background: "#06b6d4", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faShieldHalved} />}
          >
            <h3 className="vertical-timeline-element-title">
              Cybersecurity & SOC Analyst (part-time)
            </h3>

            <h4 className="vertical-timeline-element-subtitle">
              OPASSECURE / Security Research
            </h4>

            <p>
Penetration testing, vulnerability assessment, and comprehensive cybersecurity analysis using tools like Wireshark and Nmap. Experienced in deploying intrusion detection systems (IDS) and network monitoring to identify Indicators of Compromise (IoCs). Proficient in advising organizations on robust cyber hygiene practices and mitigating human-centric threats like social engineering
            </p>
          </VerticalTimelineElement>

   {/* SOFTWARE ENGINEERING */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - Present"
            iconStyle={{ background: "#06b6d4", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faLaptopCode} />}
          >
            <h3 className="vertical-timeline-element-title">
              Software Engineer
            </h3>

            <h4 className="vertical-timeline-element-subtitle">
              Freelance / Personal Projects
            </h4>

            <p>
              Development of web and mobile applications, REST APIs,
              machine learning systems, and secure software solutions
              with focus on scalability and performance.
            </p>
          </VerticalTimelineElement>

          {/* WORDPRESS DEVELOPMENT - VESSEN */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug 2024 - Nov 2024"
            iconStyle={{ background: "#06b6d4", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h3 className="vertical-timeline-element-title">
              WordPress Developer
            </h3>

            <h4 className="vertical-timeline-element-subtitle">
              Vessen Computing
            </h4>

            <p>
              Developed and customized WordPress websites and plugins,
              implemented responsive UI designs, and improved website
              performance and functionality for client projects.
            </p>
          </VerticalTimelineElement>

          {/* NEMA INTERNSHIP */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024"
            iconStyle={{ background: "#06b6d4", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              ICT Support Intern
            </h3>

            <h4 className="vertical-timeline-element-subtitle">
              National Environment Management Authority (NEMA)
            </h4>

            <p>
              Provided IT support services including system troubleshooting,
              software installation, user support, and maintenance of ICT systems
              within the organization.
            </p>
          </VerticalTimelineElement>

       

          
          {/* NETWORKING */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - Present"
            iconStyle={{ background: "#06b6d4", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faNetworkWired} />}
          >
            <h3 className="vertical-timeline-element-title">
              Networking Technician
            </h3>

            <h4 className="vertical-timeline-element-subtitle">
              Infrastructure Setup & Support
            </h4>

            <p>
              Router configuration, access point setup,
              LAN/WAN troubleshooting, firewall configuration,
              and maintenance of network infrastructure.
            </p>
          </VerticalTimelineElement>

          {/* IT SUPPORT & HARDWARE */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - Present"
            iconStyle={{ background: "#06b6d4", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faScrewdriverWrench} />}
          >
            <h3 className="vertical-timeline-element-title">
              IT Support & Hardware Technician
            </h3>

            <h4 className="vertical-timeline-element-subtitle">
              Technical Support Services
            </h4>

            <p>
              System troubleshooting, software installation,
              OS setup, laptop repairs (screens, RAM, keyboards),
              diagnostics, and full PC assembly from scratch.
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;