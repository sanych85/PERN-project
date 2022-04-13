import React, { useContext, useState } from 'react';
import { Modal, Button, Form, Dropdown, Row, Col } from 'react-bootstrap';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import { Context } from '../..';

const CreateDevice = ({ show, onHide }) => {
  const { device } = useContext(Context);
  const [info, setInfo ] = useState([]);

  const addInfo = () => {
    setInfo([...info, { title: '', description: '', number: Date.now() }]);
  };

  const removeInfo=(number)=> {
    setInfo(info.filter(i=>i.number!==number));
  }
  return (
    <>
      <Modal show={show} onHide={onHide} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title> Добавить тип</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form placeholder={'введите название типов'}>
            <Dropdown>
              <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
              <DropdownMenu>
                {device.types.map((type) => (
                  <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                ))}
              </DropdownMenu>
            </Dropdown>

            <Dropdown className="ml-3 ">
              <Dropdown.Toggle>Выберите бренд</Dropdown.Toggle>
              <DropdownMenu>
                {device.brands.map((brand) => (
                  <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Form.Control
              placeholder="Введите название устройства"
              className="mt-3"></Form.Control>
            <Form.Control
              placeholder="Введите стоимость устройства"
              className="mt-3"
              type="number"></Form.Control>
            <Form.Control
              placeholder="Введите описание устройства"
              className="mt-3"
              type="file"></Form.Control>
            <hr />
            <Button variant="outline-dark" onClick={addInfo}>
              Добавить новое свойство
            </Button>
            {info.map((i) => (
              <Row className="mt-2" key={i.number}>
                <Col md={4}>
                  <Form.Control placeholder="Введите название характеристики"></Form.Control>
                </Col>
                <Col md={4}>
                  <Form.Control placeholder="Введите описание характеристики"></Form.Control>
                </Col>
                <Col md={4}>
                  <Button onClick ={()=>removeInfo(i.number)}  variant={'outline-danger'}>Удалить</Button>
                </Col>
              </Row>
            ))}
          </Form>
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

export default CreateDevice;
