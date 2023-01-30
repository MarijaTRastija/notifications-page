import React from "react";
import "./Cards.css";
import { Card, Container } from "react-bootstrap";

export default function Cards() {
  return (
    <Container className="container">
      <Card>
        <Card.Body className="notification">
          {" "}
          <strong>Mark Webber</strong> reacted to your recent post today{" "}
        </Card.Body>
      </Card>{" "}
    </Container>
  );
}
