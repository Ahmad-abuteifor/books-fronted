import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export class AddBooks extends Component {

  render() {
    return (

      <Modal show={this.props.show} onHide={this.props.handelDisplayAddModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add a Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.props.handelAddModal}>
            <Form.Group className="mb-3">
              <Form.Label>Book title </Form.Label>
              <Form.Control type="text" name="bookTitle" placeholder="Enter Cat Name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>BOOK Discrepisein </Form.Label>
              <Form.Control type="text" name="bookdescription" placeholder="Enter Cat Breed" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>BOOK STATUS</Form.Label>
              <Form.Control type="text" name="bookstatus" placeholder="Enter Cat Image" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>YOUR EMILE!</Form.Label>
              <Form.Control type="text" name="bookemail" placeholder="Enter Cat Image" />
            </Form.Group>

            <Button variant="primary" type="submit">
             ADD NEW BOOK 
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

    )
  }
}

export default AddBooks