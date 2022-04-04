import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import star from '../assets/1088px-Five-pointed_star.svg.png';
import {useNavigate } from "react-router-dom"
import { DEVICE_ROUTE } from '../utils/constants';
const DeviceItem = ({ device }) => {
    const navigate = useNavigate ()
  return (
      
    <Col md={3} className = "mt-3" onClick = {()=>navigate(DEVICE_ROUTE + '/'+ device.id)}>
      <Card style={{ width: 150, cursor: 'pointer', border: 'light' }}>
        <Image height={150} width={150} src={device.img} />
        <div className="d-flex justify-content-between align-items-center text-black-50">
          <div className=''>samsung</div>
          <div className="d-flex align-items-center">
            <div>{device.rating}</div>
            <Image src={star} style={{ width: 15, height: 15 }} />
          </div>
         
        </div>
        <div>{device.name}</div>
      </Card>
    </Col>
  );
};

export default DeviceItem;
