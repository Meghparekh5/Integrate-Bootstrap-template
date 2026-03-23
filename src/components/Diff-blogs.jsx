import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css";

import blogImg1 from "../assets/Images/ClassBlog-1.jpg";
import blogImg2 from "../assets/Images/ClassBlog-2.jpg";
import blogImg3 from "../assets/Images/ClassBlog-3.jpg";
import blogImg4 from "../assets/Images/ClassBlog-4.jpg";
import blogImg5 from "../assets/Images/ClassBlog-5.jpg";
import blogImg6 from "../assets/Images/ClassBlog-6.jpg";
import blogImg7 from "../assets/Images/ClassBlog-7.jpg";
import blogImg8 from "../assets/Images/ClassBlog-8.jpg";
import blogImg9 from "../assets/Images/ClassBlog-9.jpg";

const ClassBlog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const blogs = [
    { category: "Yoga", title: "Why Cardio is Important for Your Health", image: blogImg1 },
    { category: "Crossfit", title: "Keep Your Body It’s Best", image: blogImg2 },
    { category: "Fitness", title: "Get off your butt and exercise", image: blogImg3 },
    { category: "Meditation", title: "Top 10 Exercises for Beginners", image: blogImg4 },
    { category: "Boxing", title: "Everything You Need To Know", image: blogImg5 },
    { category: "Body Building", title: "Strength Training Tips", image: blogImg6 },
    { category: "Fitness", title: "Stay Motivated to Work Out", image: blogImg7 },
    { category: "Diet", title: "Best Diet Plans", image: blogImg8 },
    { category: "Gym", title: "Boxing in Gym", image: blogImg9 }
  ];

  const categories = ["All", ...new Set(blogs.map(b => b.category))];

  const filteredBlogs = blogs.filter((b) => {
    const title = b.title.toLowerCase();
    const category = b.category.toLowerCase();
    const search = searchTerm.toLowerCase();

    const matchCategory =
      activeCategory === "All" ||
      category === activeCategory.toLowerCase();

    const matchSearch =
      title.includes(search) || category.includes(search);

    return matchCategory && matchSearch;
  });

  return (
    <section className="blog-page py-120">
      <Container>
        <Row>
          <Col lg={8}>
            <Row>
              {filteredBlogs.length > 0 ? (
                filteredBlogs.map((item, index) => (
                  <Col md={6} key={index} className="mb-4">
                    <div
                      className="blog-card-new"
                      style={{ backgroundImage: `url(${item.image})` }}
                    >
                      <div className="overlay">
                        <span className="category">{item.category}</span>
                        <h5>{item.title}</h5>
                        <p>By Admin | March 23, 2022</p>
                      </div>
                    </div>
                  </Col>
                ))
              ) : (
                <p style={{ width: "100%", textAlign: "center" }}>
                  No blogs found
                </p>
              )}
            </Row>
          </Col>

          <Col lg={4}>
            <div className="sidebar">
              <input
                type="text"
                placeholder="Search here..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />

              <div className="sidebar-box">
                <h5>Categories</h5>
                <ul>
                  {categories.map((cat, index) => (
                    <li
                      key={index}
                      onClick={() => setActiveCategory(cat)}
                      style={{
                        cursor: "pointer",
                        fontWeight: activeCategory === cat ? "700" : "400",
                        color: activeCategory === cat ? "#ff0033" : "#000"
                      }}
                    >
                      {cat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ClassBlog;
