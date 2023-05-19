import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const SingleBook = ({ title, price, asin, img, category }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{price}</Card.Text>
        <Card.Text>{asin}</Card.Text>
        <Button variant="primary">{category}</Button>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
