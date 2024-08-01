import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Card1 from "./../../assets/images/card-img2.webp";

function CardRightImage() {
  return (
    <Card className="bg-light mb-3 m-3">
      <div className="row g-0">
        <div className="col-md-8">
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
              Some quick example text to build on the card title and make up the bulk of the card's content.
            
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </div>
        <div className="col-md-4">
          <Card.Img src={Card1} alt="Card image cap"  style={{ height:"400px"}}/>
        </div>
      </div>
    </Card>
  );
}

export default CardRightImage;
