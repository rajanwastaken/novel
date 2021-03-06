import React from "react";
import { Container, Row, Col } from "react-grid-system";
import "../App.css";
import { Link } from 'react-router-dom';

export default function Part2() {
  return (
    <div className="App" style={{overflow: 'hidden'}}>

      <Container>
        <header className="App-header">
          <Col sm={12}>
            <h2 className="explorehead">Part 2</h2>
            <p className="p-manifesto" style={{textAlign: 'center'}}><i>With this exciting news, Ryan takes on high school and meets impactful people along the way.</i></p>
          </Col>
          <Row>
          <Col sm={2} className="nomobile"></Col>
          <Col sm={3}>


          <p><Link to="/part1/chapter9" className="roundedcorner">Back to Chapter 9</Link></p>
          </Col>
          <Col sm={3}></Col>
          <Col sm={3}>

          <p><Link to="/part2/chapter10" className="roundedcorner">Go To Chapter 10</Link></p>
          </Col>
          <Col sm={2}></Col>
          </Row>
          
        </header>
      </Container>
    </div>
  );
}
