import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import star from '../assets/1088px-Five-pointed_star.svg.png';
import  {useParams} from "react-router-dom"
import { fetchOneDevice } from '../http/deviceApi';
import { observer } from 'mobx-react-lite';
const DevicePAge = () => {
  const [device, setDevice] = useState({})
  const [render, setRender ] = useState(false)
  const {id}= useParams()
  console.log(id)
  useEffect(()=> {
    fetchOneDevice(id).then(data=>{
      setDevice(data)
      setRender(true)
    })
    console.log('in use effect')
    console.log(render)
  },[render])
  
  console.log(device)
  return (
    <>
      {Object.keys(device).length !== 0?
        <Container className="mt-3">
        <Row>
        <Col md={4}>
          <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.device.img} />
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column align-items-center justify-content-center">
            <h2>{device.device.name}</h2>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                background: `url(${star}) no-repeat center center`,
                width: 240,
                height: 240,
                backgroundSize: 'cover',
                fontSize: 64,
              }}>
              {device.device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-center"
            style={{
              width: 300,
              height: 300,
              fontSize: 32,
              border: '5px solid lightgray',
            }}>
            <h3>Оn:{device.device.price} руб</h3>
            <Button variant={'outline-dark'}>Добавить в корзину</Button>
          </Card>
        </Col>
      </Row>
      <Row className = "d-flex flex-column m-3">
        <h1>Характеристики</h1>
        {device.device.info.map((info, index) => (
          <Row key = {info.id} style = {{background:index%2 ===0?'lightgray':'transparrent', padding:10}}>
            {info.title}:{info.description}
          </Row>
        ))}
      </Row>
    </Container>
    
    :<>Ничего</>}
    </>  
  );
};

export default DevicePAge;
