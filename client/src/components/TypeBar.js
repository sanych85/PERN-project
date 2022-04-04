import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Context } from '..';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
const TypeBar = observer(() => {
  const {device}  = useContext(Context);

  return (
    <ListGroup>
      {device.types.map((type) => (
        <ListGroup.Item key={type.id}
        style ={{cursor:"pointer"}}
        active = {type.id===device.selectedType.id}
        onClick = {()=>device.setSelectedType(type)}
        >
            {type.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
});
export default TypeBar;
