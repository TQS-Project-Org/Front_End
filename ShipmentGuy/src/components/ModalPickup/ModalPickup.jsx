/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function ModalPickup(props) {
  const [oldJson, setOldJson] = useState({});
  const [newJson, setNewJson] = useState({});

  const [name, setName] = useState(props.user.name);
  const [address, setAddress] = useState(props.user.address);
  const [city, setCity] = useState(props.user.city);
  const [state, setState] = useState(props.user.state);
  const [zip, setZip] = useState(props.user.zip);
  const [phone, setPhone] = useState(props.user.phone);
  const [opens, setOpens] = useState(props.user.opens);
  const [closes, setCloses] = useState(props.user.closes);
  const [available, setAvailable] = useState(props.user.available);


  useEffect(() => {
    let jsonTemp = props.user;
    setOldJson(jsonTemp);
    setNewJson(jsonTemp);
    setName(jsonTemp.name);
    setAddress(jsonTemp.address);
    setCity(jsonTemp.city);
    setState(jsonTemp.state);
    setZip(jsonTemp.zip);
    setPhone(jsonTemp.phone);
    setOpens(jsonTemp.opens);
    setCloses(jsonTemp.closes);
    setAvailable(jsonTemp.available);
  }, []);


    const handleChange = (e) => {
      setNewJson({[e.target.name]: e.target.value});
      console.log("Old Json: ", oldJson);
      console.log("Name: ", e.target.name);
      console.log("Value: ", e.target.value);
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(newJson);
        props.onHide();
        props.onEdit();
    }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit the pickup point
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={(e) => handleSubmit(e)}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            placeholder="Manuél Gomez"
            onChange={handleChange}
            value={name}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Address</Form.Label>
          <Form.Control
            placeholder="Rua dos Bobos, N0"
            onChange={handleChange}
            name="address"
          />
        </Form.Group>
      </Row>

      <Row className="mb-4">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control placeholder="San Diego" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control placeholder="CA" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control placeholder="3810-193" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Phone</Form.Label>
          <Form.Control placeholder="911524213" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Opens</Form.Label>
            <Form.Control type='time' placeholder="09h00" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Closes</Form.Label>
          <Form.Control placeholder="5pm" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Available</Form.Label>
          <Form.Control placeholder="Yes" />
        </Form.Group>
      </Row>

        <Form.Group className="" controlId="formGridAddress2">
            <Button onClick={props.onHide}>Close</Button>
            <Button className='ms-2' type='submit'>Edit</Button>
        </Form.Group>
    </Form>
    </Modal.Body>
    </Modal>
  );
}