import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Card from 'react-bootstrap/Card';
import { Form } from 'react-bootstrap/';
class FormDesgin extends React.Component {
  
  render() {
    return (

      <div>
        <Form.Label>what is num of horrn?</Form.Label>
        <Form.Select aria-label="Default select example" name='form' onChange={this.props.onchangefun} >
          <option value="5">all</option>
          <option value="1">one</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="100">woow</option>

        </Form.Select>

      </div>

    );

  }
}

export default FormDesgin;
