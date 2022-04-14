import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { createType } from '../../http/deviceApi';
const CreateType = ({ show, onHide }) => {
  const [value, setValue] = useState('');
  const addType = () => {
    createType({name:value }).then(data=>{
      setValue('')
      onHide()
    })
  };
  return (
    <>
      <Modal show={show} onHide={onHide} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title> Добавить тип</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            placeholder={'введите название типов'}
            value={value}
            onChange={(e) => setValue(e.target.value)}></Form.Control>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={onHide}>
            Закрыть
          </Button>
          <Button variant="outline-success" onClick={addType}>
            Добавить новый тип
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CreateType;
