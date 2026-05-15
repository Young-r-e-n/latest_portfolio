import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faCertificate,
  faShieldHalved,
  faNetworkWired,
} from "@fortawesome/free-solid-svg-icons";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Education.scss";

function Education() {
  return (
    <div id="education">
      <div className="items-container">

        <h1>Education & Certifications</h1>

        <VerticalTimeline>

          {/* DEGREE */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2020 -2024"
            iconStyle={{ background: "#8b5cf6", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelor of Science in Applied Computer Science
            </h3>

            <h4 className="vertical-timeline-element-subtitle">
              Daystar University
            </h4>

            <p>
              Focus on software engineering, cybersecurity, networking,
              databases, algorithms, and information systems security.
            </p>
          </VerticalTimelineElement>

          {/* CISCO ROUTING & WIRELESS */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2022"
            iconStyle={{ background: "#8b5cf6", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faNetworkWired} />}
          >
            <h3 className="vertical-timeline-element-title">
              Cisco Networking (Routing & Wireless Fundamentals)
            </h3>

            <h4 className="vertical-timeline-element-subtitle">
              Cisco Networking Academy
            </h4>

            <p>
              Training in routing fundamentals, wireless network setup,
              access point configuration, LAN/WAN concepts, IP addressing,
              and basic network troubleshooting.
            </p>
          </VerticalTimelineElement>

          {/* CYBERSECURITY CERTIFICATION */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2024"
            iconStyle={{ background: "#8b5cf6", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faShieldHalved} />}
          >
            <h3 className="vertical-timeline-element-title">
              Cybersecurity & Ethical Hacking (Penetration Testing)
            </h3>

            <h4 className="vertical-timeline-element-subtitle">
              CyberShujaa Certification
            </h4>

            <p>
              Penetration testing, vulnerability assessment,
              web application security, social engineering awareness,
              and ethical hacking fundamentals.
            </p>
          </VerticalTimelineElement>

          {/* LEADERSHIP / GDSC */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2023 - 2024"
            iconStyle={{ background: "#8b5cf6", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faCertificate} />}
          >
            <h3 className="vertical-timeline-element-title">
              Google Developer Student Club (Cybersecurity Lead)
            </h3>

            <h4 className="vertical-timeline-element-subtitle">
              Community Leadership Role
            </h4>

            <p>
              Led cybersecurity workshops, peer training,
              and awareness sessions on secure coding practices,
              ethical hacking, and threat mitigation.
            </p>
          </VerticalTimelineElement>

          {/* PRACTICAL LAB */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Ongoing"
            iconStyle={{ background: "#8b5cf6", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faCertificate} />}
          >
            <h3 className="vertical-timeline-element-title">
              Practical Cybersecurity & Networking Labs
            </h3>

            <h4 className="vertical-timeline-element-subtitle">
              Homelab / Self-Study Environment
            </h4>

            <p>
              Hands-on work with Kali Linux, Wireshark, Nmap,
              pfSense firewall configuration, IDS setup,
              and network simulation environments.
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Education;