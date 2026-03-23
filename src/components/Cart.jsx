import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../App.css";

import img1 from "../assets/Images/product-1.png";
import img2 from "../assets/Images/product-2.png";
import img3 from "../assets/Images/product-3.png";
import img4 from "../assets/Images/product-4.png";
import img5 from "../assets/Images/product-5.png";
import img6 from "../assets/Images/product-6.png";
import img7 from "../assets/Images/product-7.png";
import img8 from "../assets/Images/product-8.png";
import img9 from "../assets/Images/product-9.png";

const Shop = () => {
  const [sort, setSort] = useState("default");
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [message, setMessage] = useState("");

  const products = [
    { id: 1, name: "ABS Machine", price: 140, image: img1 },
    { id: 2, name: "Gym Equipment", price: 60, image: img2 },
    { id: 3, name: "Gym Hat Cap", price: 30, image: img3 },
    { id: 4, name: "Gym Shoe Sneaker", price: 80, image: img4 },
    { id: 5, name: "Gym Treadmill Machine", price: 200, image: img5 },
    { id: 6, name: "Gym Sneaker", price: 80, image: img6 },
    { id: 7, name: "Fitness Short pants", price: 30, image: img7 },
    { id: 8, name: "Water Bottle", price: 30, image: img8 },
    { id: 9, name: "Kettlebell Dumbbell", price: 60, image: img9 }
  ];

  const sortedProducts = [...products].sort((a, b) => {
    if (sort === "low") return a.price - b.price;
    if (sort === "high") return b.price - a.price;
    return 0;
  });

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
    setMessage(`${item.name} added to cart`);
    setTimeout(() => setMessage(""), 2000);
  };

  const removeItem = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <section className="shop-section py-120">
      <Container>

        {message && <div className="cart-msg">{message}</div>}

        {showCart && (
          <div className="cart-box mb-4">
            <div className="cart-header">
              <h5>Your Cart</h5>
              <span>{cart.length} Items</span>
            </div>

            {cart.length === 0 && <p className="empty">Cart is empty</p>}

            {cart.map((item, index) => (
              <div className="cart-item" key={index}>
                <div>
                  <h6>{item.name}</h6>
                  <p>${item.price}</p>
                </div>
                <Button size="sm" onClick={() => removeItem(index)}>✕</Button>
              </div>
            ))}

            {cart.length > 0 && (
              <div className="cart-footer">
                <h6>Total: ${total}</h6>
                <Button className="checkout-btn">Checkout</Button>
              </div>
            )}
          </div>
        )}

        <div className="shop-top">
          <span>Showing all {products.length} results</span>

          <div style={{ display: "flex", gap: "10px" }}>
            <Button
              type="button"
              className="view-cart-btn"
              onClick={() => setShowCart(!showCart)}
            >
              View Cart ({cart.length})
            </Button>

            <Form.Select
              className="sort-box"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="default">Default sorting</option>
              <option value="low">Low to High</option>
              <option value="high">High to Low</option>
            </Form.Select>
          </div>
        </div>

        <Row>
          {sortedProducts.map((item) => (
            <Col md={6} key={item.id} className="mb-4">
              <div className="product-card">

                <div className="product-img">
                  <img src={item.image} alt="" />
                </div>

                <h6>{item.name}</h6>
                <p>${item.price}.00</p>

                <Button
                  type="button"
                  className="cart-btn"
                  onClick={() => addToCart(item)}
                >
                  Add to cart
                </Button>

              </div>
            </Col>
          ))}
        </Row>

      </Container>
    </section>
  );
};

export default Shop;