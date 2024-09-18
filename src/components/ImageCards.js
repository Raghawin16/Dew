import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';

const ImageCards = ({ images }) => {
  return (
    <div className="container my-5">
      <Row>
        {images.map((image, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={image.src} alt={`Card ${index + 1}`} />
              <Card.Body>
                <Card.Title>{image.title}</Card.Title>
                <Card.Text>{image.description}</Card.Text>
                {/* Button inside each card */}
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ImageCards;
