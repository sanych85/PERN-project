import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { createBrand } from '../../http/deviceApi';
const CreateBrand = ({ show, onHide }) => {
  const [value, setValue] = useState('');
  const addBrand = () => {
    createBrand({ name: value }).then((data) => {
      setValue('');
      onHide();
    });
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
          <Button variant="outline-success" onClick={addBrand}>
            Добавить новый бренд
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CreateBrand;
