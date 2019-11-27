import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addCityToQueue } from "../../actions";
import {Button, Container, FormControl, FormGroup, Row} from "react-bootstrap";
import Form from "react-bootstrap/Form";

const InputForm = ({ addCityToQueue }) => {
  const [ inputValue, setInputValue ] = useState("");

  const handleChange = (event) =>
    setInputValue(event.target.value);

  const clickButton = (event) =>{
    event.preventDefault();
    setInputValue('');
    addCityToQueue(inputValue);
  };

  return (
        <Form inline={true} >
          <FormControl
            onChange={handleChange}
            value={ inputValue }
          />
          <Button  type="submit"
            onClick={clickButton}
          >
            Добавить
          </Button>


        </Form>

  )
};

export default connect( null, { addCityToQueue } )( InputForm );