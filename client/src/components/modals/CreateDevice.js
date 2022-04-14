import React, { useContext, useState, useEffect } from 'react';
import { Modal, Button, Form, Dropdown, Row, Col } from 'react-bootstrap';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import { Context } from '../..';
import { fetchBrands  } from '../../http/brandApi';
import { fetchTypes  } from '../../http/deviceApi';

import { observer } from 'mobx-react-lite';
const CreateDevice = observer(({ show, onHide }) => {
  const { device } = useContext(Context);
  const [info, setInfo] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);

  useEffect(() => {
    // fetchTypes().then((data) => device.setTypes(data));
    fetchBrands().then((data) => device.setBrands(data.brands));
  }, []);
  const addInfo = () => {
    setInfo([...info, { title: '', description: '', number: Date.now() }]);
  };

  const removeInfo = (number) => {
    setInfo(info.filter((i) => i.number !== number));
  };

  const selectFile = (e) => {
    setFile(e.target.files[0]);
  };
  return (
    <>
      <Modal show={show} onHide={onHide} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title> Добавить тип</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form placeholder={'введите название типов'}>
            <Dropdown>
              <Dropdown.Toggle>
                {device.selectedType.name || 'Выберите тип'}
              </Dropdown.Toggle>
              <DropdownMenu>
                {device.types.map((type) => (
                  <Dropdown.Item
                    onClick={device.setSelectedType(type)}
                    key={type.id}>
                    {type.name}
                  </Dropdown.Item>
                ))}
              </DropdownMenu>
            </Dropdown>

            <Dropdown className="ml-3 ">
              <Dropdown.Toggle>
                {device.selectedBrand.name || 'Выберите бренд'}
              </Dropdown.Toggle>
              <DropdownMenu>
                {device.brands.map((brand) => (
                  <Dropdown.Item
                    onClick={device.setSelectedBrand(brand)}
                    key={brand.id}>
                    {brand.name}
                  </Dropdown.Item>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Form.Control
              placeholder="Введите название устройства"
              className="mt-3"
              value={name}
              onChange={(e) => setName(e.target.value)}></Form.Control>
            <Form.Control
              placeholder="Введите стоимость устройства"
              className="mt-3"
              type="number"
              value={price}
              onChange={(e) => setPrice(+e.target.value)}></Form.Control>
            <Form.Control
              placeholder="Введите описание устройства"
              className="mt-3"
              type="file"
              onChange={selectFile}></Form.Control>
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
                  <Button
                    onClick={() => removeInfo(i.number)}
                    variant={'outline-danger'}>
                    Удалить
                  </Button>
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
});

export default CreateDevice;
