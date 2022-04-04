import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '..';
import { Card, Row } from 'react-bootstrap';

const BrandBar = observer(() => {
  const { device } = useContext(Context);
  console.log(device, 'device');
  return (
    <Row className="d-flex">
      {device.brands.map((brand) => (
        <Card
          key={brand.id}
          border={brand.id === device.selectedBrand.id?'danger':'light' }
          style = {{cursor:"pointer" , width:"auto"}}
          className="p-3"
          onClick={() => device.setSelectedBrand(brand)}
          
          >
          {brand.name}
        </Card>
      ))}
    </Row>
  );
});
export default BrandBar;
