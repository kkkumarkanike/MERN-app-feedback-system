import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createSurvey } from "../store/actions/surveyActions";

function NewSurvey() {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [recipients, setRecipients] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createSurvey({
        title,
        subject,
        body,
        recipients,
      })
    );
  };
  return (
    <div>
      <h1>New Survey</h1>
      <Container style={{ marginTop: "3rem" }}>
        <Row>
          <Col lg={4}></Col>
          <Col lg={4}>
            <Form style={{ width: "100%" }}>
              <Form.Group className="mb-3">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter Body"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter recipients"
                  value={recipients}
                  onChange={(e) => setRecipients(e.target.value)}
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                style={{ width: "100%" }}
                onClick={(e) => handleSubmit(e)}
              >
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
