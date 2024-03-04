import React from 'react';
import Card from 'react-bootstrap/Card';
import Tags from './Tags';


const MyCard = ({image, nombre, descripcion, color, text}) => {
    return (
    <>
    <div className='carta'>
    <Card style={{ width: "18rem", display: "flex", justifyContent: "center", alignItems: "center", margin: "10px", textAlign:"center" }}>
    <Card.Img variant="top" src={image} />
    <Card.Body>
    <Card.Title>{nombre}</Card.Title>
    <Card.Text>{descripcion}</Card.Text>
    <Tags  color={color} text={text}/>
    </Card.Body>
    </Card>
    </div>
    </>
    );
    };
    export default MyCard;