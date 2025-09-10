import React from "react";
import "./programs.css";
import { FaUserShield, FaUsers, FaChalkboardTeacher, FaLaptopCode } from "react-icons/fa";

const Programs = () => {
  const data = [
    {
      icon: <FaLaptopCode />,
      title: "Free Cybersecurity Training for Students",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel odio vel justo porta ultrices."
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Cyber Safety Awareness for Schools & Colleges",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec ligula eget nulla ultrices vehicula."
    },
    {
      icon: <FaUserShield />,
      title: "Women in Cyber Program",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut leo vitae mauris blandit varius."
    },
    {
      icon: <FaUsers />,
      title: "Hacker Community Meetups",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis est id ligula viverra, sit amet gravida."
    }
  ];

  return (
    <div className="programs-container">
      <h2 className="programs-title">Programs & Initiatives</h2>
      <p className="programs-subtitle">Our Key Initiatives Driving Cybersecurity Awareness</p>

      <div className="programs-grid">
        {data.map((item, index) => (
          <div className="program-card" key={index}>
            <div className="program-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
