import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css";

const schedule = [
  { day: "MON", time: "9:00am", title: "FITNESS", color: "#ff7a00" },
  { day: "MON", time: "10:00am", title: "BODY BUILDING", color: "#00e0ff" },
  { day: "MON", time: "4:00pm", title: "RUNNING", color: "#9b59ff" },

  { day: "TUE", time: "9:00am", title: "BOXING", color: "#ff3b3b" },
  { day: "TUE", time: "11:00am", title: "YOGA", color: "#7CFC00" },

  { day: "WED", time: "9:00am", title: "CYCLING", color: "#90ee90" },

  { day: "FRI", time: "10:00am", title: "KARATE", color: "#ffd700" },
  { day: "SAT", time: "9:00am", title: "POWER LIFTING", color: "#1e90ff" },
  { day: "SUN", time: "6:00pm", title: "MARTIAL ARTS", color: "#ff3b3b" },
];

const days = ["MON", "TUE", "WED", "THUR", "FRI", "SAT", "SUN"];
const times = ["9:00am", "10:00am", "11:00am", "1:00pm", "4:00pm", "6:00pm"];

const Timetable = () => {
  return (
    <section className="tt-section">
      <Container className="d-flex justify-content-center">
        <div className="tt-box">

          {/* Header Row */}
          <Row className="tt-head text-center">
            <Col className="tt-time"></Col>
            {days.map((day, i) => (
              <Col key={i}>{day}</Col>
            ))}
          </Row>

          {/* Time Rows */}
          {times.map((time, i) => (
            <Row key={i} className="tt-row">
              <Col className="tt-time">{time}</Col>

              {days.map((day, j) => {
                const item = schedule.find(
                  (s) => s.day === day && s.time === time
                );

                return (
                  <Col key={j} className="tt-cell">
                    {item && (
                      <div className="tt-class">
                        <p className="cell-time">{item.time}</p>
                        <h6 style={{ color: item.color }}>{item.title}</h6>
                      </div>
                    )}
                  </Col>
                );
              })}
            </Row>
          ))}

        </div>
      </Container>
    </section>
  );
};

export default Timetable;