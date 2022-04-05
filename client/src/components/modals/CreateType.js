import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
const CreateType = ({ show, onHide }) => {
  return (
    <>


      <Modal show={show} onHide={onHide} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title> Добавить тип</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form.Control placeholder = {"введите название типов"}>

            </Form.Control>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={onHide}>
            Закрыть
          </Button>
          <Button variant="outline-success" onClick={onHide}>
            Добавить новый тип
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CreateType;
