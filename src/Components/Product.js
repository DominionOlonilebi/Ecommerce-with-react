import React from "react";
import Detail from "./Details";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import SolarNav from "./SolarNav";
import Footer from "./Footer";

const Product = ({ addtocart }) => {
  return (
    <>
      <SolarNav />
      <Container fluid className="products_container">
        <Row className="d-flex flex-row justify-content-center">
          {Detail.map((curElm) => {
            return (
              <>
                <Col md={4}>
                  <Card
                    style={{ width: "25rem" }}
                    className="products_card"
                    key={curElm.id}
                  >
                    <a href="/confirm">
                      <img
                        src={curElm.Logo}
                        alt={curElm.Title}
                        width={35}
                        height={27}
                        className="logo mt-4 mb-2"
                      />
                      <h4 className="px-3 pt-4 pb-2">{curElm.Title}</h4>

                      <Row>
                        <Col md={6}>
                          <h5 className="px-3">{curElm.Name} </h5>
                          <p className="px-3">{curElm.Note} </p>
                        </Col>
                        <Col md={6}>
                          <Card.Img
                            variant="left"
                            src={curElm.Img}
                            alt=""
                            width={186}
                            height={180}
                            className=""
                          />
                        </Col>
                      </Row>

                      <Card.Body className="cards_body">
                        <Card.Title></Card.Title>
                        <h6>{curElm.Amount} </h6>
                        <Card.Text>{curElm.Price}</Card.Text>
                        <Button
                          variant="outline-primary"
                          className="add_to_cart_btn"
                          onClick={() => addtocart(curElm)}
                        >
                          Add To Cart
                        </Button>
                      </Card.Body>
                    </a>
                  </Card>
                </Col>
              </>
            );
          })}
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Product;
