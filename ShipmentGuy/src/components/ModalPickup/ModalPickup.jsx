/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function ModalPickup(props) {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
        props.onHide();
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
          <Form.Control placeholder="Manuél Gomez" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="Rua dos Bobos, N0" />
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
            <Button className='ms-2' type='submit'>Send</Button>
        </Form.Group>
    </Form>
    </Modal.Body>
    </Modal>
  );
}