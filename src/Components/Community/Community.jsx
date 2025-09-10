import React from "react";
import "./community.css";
import { FaCalendarAlt } from "react-icons/fa";

const Community = () => {
  const events = [
    {
      date: "22 April 2025",
      university: "Central University of Haryana"
    },
    {
      date: "10 June 2025",
      university: "Gurugram University"
    }
  ];

  return (
    <div className="community-container">
      <div className="community-content">
        <p className="community-tagline">ROOTxCon</p>
        <h1>
          Community For <br /> Hackers
        </h1>
        <p className="description">
          We are building a global network where hackers and defenders come
          together to collaborate and innovate. Join a community driven by
          knowledge-sharing and cutting-edge cybersecurity practices.
          Strengthen your skills and be part of the future of digital defense.
        </p>
        <button className="join-btn">→ Join Now as Volunteers</button>
      </div>

      <div className="events-box">
      <h3>Coming Up</h3>
      <div className="events-list">
        {events.map((event, index) => (
          <div className="event-item" key={index}>
            <FaCalendarAlt className="event-icon" />
            <div>
              <p className="event-date">{event.date}</p>
              <p className="event-university">{event.university}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Community;
