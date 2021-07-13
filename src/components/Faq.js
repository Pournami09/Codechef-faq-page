import "../styles/Faq.css";
import React, { useState } from "react";
import {
  Accordion,
  Card,
  useAccordionToggle,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function CustomToggle({ children, eventKey, handleClick }) {
  const decoratedOnClick = useAccordionToggle(eventKey, () => {
    handleClick();
  });

  return (
    <div className="card-header" type="button" onClick={decoratedOnClick}>
      {children}
    </div>
  );
}

function Faq() {
  const [activeKey, setActiveKey] = useState(0);

  const data = [
    {
      question: "What is arena? What kind of a site/resource is it?",
      answer:
        "arena is a contest platform cum social networking site for people who are interested in and want to take part in competitive programming challenges. People can organize contests and discuss about other contests. People can share and learn about several technical domains.",
    },
    {
      question: "How can I take part in a contest?",
      answer:
        "You can visit any contest from Contests page. Open the problem you want to solve and try to come up with a solution which will cover all the tasks (example + hidden). Submit your source code file by selecting appropriate language.",
    },
    {
      question: "How can I organize a contest?",
      answer:
        "You can send a request to email given on Contact Page.",
    },
    {
      question: "What are blog posts here? Who can write?",
      answer:
        "Posts are general blog posts written by any members of this platform. These posts can vary in terms of domain and importance. We intend to keep the platform clean and as meaningful as we can by ensuring sensible content is provided to you.",
    },
  
  ];

  return (
    <Container className="main-container">
      <Row>
        <Col sm={12} md={12} lg={3}>
          <h2 className="page-heading">FAQs</h2>
          <div className="rectangle"></div>
        </Col>
        
        <Col sm={12} md={12} lg={8}>
          <Accordion defaultActiveKey={0} activeKey={activeKey} >
            {data.map((item, index) => (
              <Card key={index}>
                <CustomToggle
                  as={Card.Header}
                  eventKey={index}
                  handleClick={() => {
                    if (activeKey === index) {
                      setActiveKey(null);
                    } else {
                      setActiveKey(index);
                    }
                  }}
                >
                  <div className="faq-title">
                    <Card.Title className="faq-question">
                      {item.question}
                    </Card.Title>
                    {activeKey === index ? (
                      <i className="fas fa-minus"></i>
                    ) : (
                      <i className="fas fa-plus"></i>
                    )}
                  </div>
                </CustomToggle>

                <Accordion.Collapse eventKey={index}>
                  <Card.Body className="faq-answer">{item.answer}</Card.Body>
                </Accordion.Collapse>
              </Card>
            ))}
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
}

export default Faq;
