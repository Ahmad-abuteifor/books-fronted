import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export class UpdateBook extends Component {

  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.handelDisplayUpdateModal}>
        <Modal.Header closeButton>
          <Modal.Title>Update Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.props.handelUpdateModal}>
            <Form.Group className="mb-3">
              <Form.Label>Book Title</Form.Label>
              <Form.Control type="text" name="bookTitle" placeholder="Enter book Name" defaultValue={this.props.previousBooksData.title} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Book Description</Form.Label>
              <Form.Control type="text" name="bookdescription" placeholder="Enter book Description" defaultValue={this.props.previousBooksData.description} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Book Status</Form.Label>
              <Form.Control type="text" name="bookstatus" placeholder="Enter book Status" defaultValue={this.props.previousBooksData.status} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="text" name="bookemail" placeholder="Enter Email Address" defaultValue={this.props.previousBooksData.email} />
            </Form.Group>

            <Button variant="primary" type="submit">
              Update!
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

    )
  }
}

export default UpdateBook