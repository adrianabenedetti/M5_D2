import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SingleBook from "../components/SingleBook";
import books from "../data/scifi";

const Main = () => {
  return (
    <Container className="mt-5 mb-5">
      <Row>
        <Col className="d-flex flex-wrap gap-3 justify-content-center" sm={12}>
          {books.map((book) => {
            return (
              <SingleBook
                key={book.asin}
                title={book.title}
                img={book.img}
                asin={book.asin}
                price={book.price}
                category={book.category}
              />
            );
          })}{" "}
          <SingleBook />
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
