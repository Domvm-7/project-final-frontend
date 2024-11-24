import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about">
      <h2 className="about__title">About This Project</h2>
      <p className="about__description">
        This project is a dynamic fullstack web application that allows users to
        create, edit, and delete custom item cards. It includes user
        authentication, leveraging third-party APIs for enhanced functionality
        and offers a responsive user interface for seamless interaction.
      </p>
    </section>
  );
};

export default About;
