import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/contact.module.css";
import Form from "./Form";

const Contact = () => {
  return (
    <section id="contact" className={`${classes.contact}`}>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Contact me" />
            <h3 className="mt-4 mb-4">Contact with me</h3>
            <p>
              If you are looking for a developer with high motivation, great communication skills with great problem solving skills, I'm the right person for you. I'm excited to contribute, bring value to your company and do my best to achieve your company's goals and vision.
            </p>

            <ul className={`${classes.contact__info__list}`}>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-map-pin-line"></i>
                </span>
                <p>Hyderabad - India</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-mail-line"></i>
                </span>
                <p>kunalbadole62@gmail.com</p>
              </li>
            </ul>

            <div className={`${classes.social__links}`}>
              <Link href="https://github.com/kunaldo07">
                <i className="ri-github-line"></i>
              </Link>
              <Link href="https://www.linkedin.com/in/kunal-badole-141708182/s">
                <i className="ri-linkedin-line"></i>
              </Link>
              <Link href="https://www.instagram.com/kunalbadole_/">
                <i className="ri-instagram-line"></i>
              </Link>
            </div>
          </Col>

          <Col lg="6" md="6">
            <Form />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;