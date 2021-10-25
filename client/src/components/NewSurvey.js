import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function NewSurvey() {
  return (
    <div>
      <h1>New Survey</h1>
      <Container style={{ marginTop: "3rem" }}>
        <Row>
          <Col lg={4}></Col>
          <Col lg={4}>
            <Form style={{ width: "100%" }}>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Enter Title" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Enter Subject" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Enter Body" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Enter recipients" />
              </Form.Group>
              <Button variant="primary" type="submit" style={{ width: "100%" }}>
                Submit
              </Button>
            </Form>
          </Col>
          <Col lg={4}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default NewSurvey;
