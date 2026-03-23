import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../App.css";

// Import different images for each blog
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
    const blogs = [
        { date: "21.03.22", title: "Why Cardio is Important for Your Health", text: "Cardio exercises help improve heart health, increase stamina, and burn calories effectively for overall wellness.", image: blogImg1 },


        { date: "22.03.22", title: "Keep Your Body It’s Best", text: "Learn how to maintain your body’s peak performance through proper nutrition, exercise, and recovery routines.", image: blogImg2 },


        { date: "23.03.22", title: "Get off your butt and exercise, orders your doc", text: "Doctors recommend regular physical activity to prevent chronic diseases and improve mental well-being.", image: blogImg3 },


        { date: "24.03.22", title: "Top 10 Exercises for Beginners", text: "A beginner-friendly guide to the most effective exercises to start building strength and endurance safely.", image: blogImg4 },


        { date: "25.03.22", title: "Everything You Need To Know About Fitness", text: "Comprehensive fitness tips covering workouts, diet, and lifestyle changes for a healthier life.", image: blogImg5 },


        { date: "26.03.22", title: "Strength Training Tips You Should Know", text: "Essential tips for safe and effective strength training to build muscle and prevent injury.", image: blogImg6 },


        { date: "27.03.22", title: "How to Stay Motivated to Work Out", text: "Discover strategies to stay consistent with your workouts and keep your fitness goals on track.", image: blogImg7 },


        { date: "28.03.22", title: "Best Diet Plans for Muscle Gain", text: "Nutrition plans that support muscle growth, recovery, and overall physical performance.", image: blogImg8 },


        { date: "29.03.22", title: "Boxing in Gym", text: "Learn the basics of boxing for fitness, strength, and coordination in a fun and energetic gym session.", image: blogImg9 }
    ];

    return (
        <section className="blog-section py-120">
            <Container>
                <div className="text-center mb-5">
                    <h2
                        className="lead text-center text-white mb-3"
                        style={{
                            color: "#cbcbcb",
                            fontSize: "16px",
                            backgroundColor: "#ff0336",
                            borderRadius: "5px",
                            padding: "10px",
                            width: "228px",
                            margin: "0 auto"
                        }}
                    >
                        Latest Blog
                    </h2>

                    <h2>Our Recent News</h2>

                    <p>
                        Gymat an unknown printer took a galley of type and scrambled <br />
                        a type specimen book.
                    </p>
                </div>

                <Row>
                    {blogs.map((item, index) => (
                        <Col md={4} key={index}>
                            <div className="blog-card mb-4" style={{ backgroundImage: `url(${item.image})` }}>
                                <span className="date" style={{ color: "white" }}>{item.date}</span>
                                <h4 style={{ color: "white" }}>{item.title}</h4>
                                <p style={{ color: "white" }}>{item.text}</p>
                                <Button className="read-btn">
                                    <span>READ MORE →</span>
                                </Button>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default ClassBlog;