import React from "react";
import { Container, Row, Col,List } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";

import classes from "../../styles/about.module.css";

import skills from "../data/portofolio-skills";

const About = () => {

 // console.log(skills);

  return (
    <section id="about">
      <Container>
        <Row>
          <Col lg="6" className={`${classes.about__content}`}>
            <SectionSubtitle subtitle="About me" />
            <h3 className="mt-4">I&apos;m here</h3>
            <h3 className="mb-4">to help your next project</h3>
            {/* <p>
              I have experience in building complete websites using MERN stack. I love writing clean readable code that's easy to maintaine over time.
            </p> */}

            <div className=" d-flex align-items-center gap-5">
              <div>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Problem Solving
                </h6>

                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Latest Tech
                </h6>
              </div>

              <div>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Creative Idea
                </h6>

                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  High Quality
                </h6>
              </div>
            </div>

            <div className="mt-5">
              <button className="primary__btn">
                <Link href="#portfolio">My Portfolio</Link>
              </button>
              
            </div>
          </Col>

          <Col lg="6" className={`${classes.about__skills__div}`}>
            <SectionSubtitle subtitle="My Skills" />
            <Container className={`${classes.about__skills}`}>
              <Row>
                <Col lg='6' className={`${classes.about__skills___col}`}>
                  <ul>
                    {skills[0].map((item,index) => (
                      <li key={index}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </Col>
                <Col lg='6' className={`${classes.about__skills___col}`}>
                  <ul>
                    {skills[1].map((item,index) => (
                      <li key={index}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;