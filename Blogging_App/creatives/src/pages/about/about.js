import React from 'react';
import './about.css'; // Import the CSS file

const About = () => {
  return (
    <div className="about-us">
      <div className="about-content">
        <h2>About Us</h2>
        <p>
          We are a team of passionate creators who believe in the power of the written word. Our mission is to build a vibrant online community where people can share their stories, ideas, and experiences. We envision a platform that fosters creativity, encourages self-expression, and inspires meaningful connections.
        </p>
        <p>
          We believe everyone has a voice worth sharing, and we strive to provide a welcoming space for all. Whether you're a seasoned blogger or just starting out, we encourage you to join our community and share your unique perspective with the world.
        </p>
        <p>
          Here are some of the things you can expect from our platform:
        </p>
        <ul className="about-features">
          <li>A user-friendly interface that makes it easy to create and publish blog posts.</li>
          <li>A supportive community of writers who are always happy to offer feedback and encouragement.</li>
          <li>The opportunity to reach a global audience of readers who are interested in your ideas.</li>
          <li>A platform to learn and grow as a writer.</li>
        </ul>
      </div>
      <div className="about-image">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJv5hiUeVlQ9tbXFyhO6wP7el4T4CuWodXgA&s" alt="People connecting through writing" />
      </div>
    </div>
  );
};

export default About;
