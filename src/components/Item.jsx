import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

export const Item = ({item}) => {
    return (
        <Card id='card'>
            <Card.Img variant="top" src={item.pictureUrl} style={{ height: '12rem' }}/>
            <Card.Body style={{ alignContent: 'space-evenly' }}>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Card.Text>{item.category}</Card.Text>
                <Link to={`/item/${item.id}`}>
                    <Button variant="primary" style={{ background: '#000b24', border:'none' }}>Ver producto</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}