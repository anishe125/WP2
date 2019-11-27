import React from 'react';
import { connect } from 'react-redux';
import CityListItem from '../CityListItem/CityListItem';
import InputBox from '../Form/Form';
import {Col, Container, Row} from "react-bootstrap";

const CityList = ({ cities }) => {
  return (
    <Container  >
        <Row className="justify-content-md-center">
      <InputBox />
      </Row>
        <Row className="justify-content-md-left"  style={{display: 'flex', flexDirection: 'row',  marginLeft:  0 , marginRight: 0}}>

            {cities.map((el, i) =>(<Col sm={6}><CityListItem city={el} key={i} i={i}/></Col>))}

        </Row>
    </Container>
  )
};

const mapStateToProps = ({ frontCity, cities }) => ({
  cities,
  frontCity
});

export default connect(mapStateToProps)(CityList);