import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PayPalBtns from './PayPalBtns';
import { Button, Col, Container, Row } from 'react-bootstrap';

const Cart = ({ cartItem, setCartItem }) => {
  const increase = (product) => {
    setCartItem((prevCart) =>
      prevCart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrease = (product) => {
    setCartItem((prevCart) =>
      prevCart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const remove = (product) => {
    setCartItem((prevCart) => prevCart.filter((item) => item.id !== product.id));
  };

  const clearCart = () => {
    setCartItem([]);
  };

  const totalPrice = cartItem.reduce(
    (price, item) => price + item.quantity * item.Price,
    0
  );

  const [isCheckout, setIsCheckout] = useState(false);

  return (
    <>
      {cartItem.length === 0 && (
        <>
          <h4 className='null'>Cart Is Empty. Please select a product</h4>
          <Button className='nowshop'>
            <Link to='/product'>Shop Now</Link>
          </Button>
        </>
      )}
      <Container className='cart_container'>
        <Row>
          {cartItem.map((item) => (
            <React.Fragment key={item.id}>
              <Col md={6} className='cart_prod'>
              <div className='cart_box'>
                  <div className='cart_prod_container'>
                    <div className='cart_img_box'>
                      <img src={item.Img} alt={item.Title}/>
                    </div>
                  </div>
                </div>
              </Col>

              <Col md={6} key={item.id}>
                <div className='cart_item_detail'>
                <h2>{item.Title}</h2>
                  <h3>Price: ${item.Price}</h3>
                  <Button
                    className='qty_decrease'
                    onClick={() => decrease(item)}
                  >
                    -
                  </Button>
                  <input type='text' value={item.quantity} readOnly />
                  <Button
                    className='qty_increase'
                    onClick={() => increase(item)}
                  >
                    +
                  </Button>
                  <h3>Sub Total: ${item.Price * item.quantity}</h3>
                </div>
                <Button
                  className='remove_cart'
                  onClick={() => remove(item)}
                >
                  X
                </Button>
              </Col>
            </React.Fragment>
          ))}
        </Row>
      </Container>

      <>
        <Container className='pay_container'>
          <Row className='d-flex flex-row justify-content-center'>
            <Col md={6}>
            <p className='cart_total_price'>Subtotal: <span>#{totalPrice}</span> </p>
        <p><b>Delivery fee: <span>#0.00</span></b></p>
        <p><b>Delivery fee: <span>#0.00</span></b></p>
        <p className='cart_total_price'>Total: <span>#{totalPrice}</span></p>
        <Button
          className='checkouts'
          onClick={() => {
            if (cartItem.length) {
              setIsCheckout(true);
            }
          }}
        >
          Pay Now {`${cartItem.length}`}
        </Button>
        <Button><a href='/'>Pay Later</a></Button>

              <Button className='clear_cart' onClick={clearCart}>
                Clear Cart
              </Button>
            </Col>
          </Row>
        </Container>
      </>

      <div className='check'>
        {isCheckout && <PayPalBtns total={totalPrice} item={cartItem} />}
      </div>
    </>
  );
};

export default Cart;