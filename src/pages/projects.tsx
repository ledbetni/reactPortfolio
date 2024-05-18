import React from "react";
import ProjectCard from "../components/projectCard";

const ProjectPage = () => {
  return (
    <div id="projects">
      <ProjectCard
        title="SafetyNet"
        description="SafetyNet is a mobile application that allows users to send their location and a pre-crafted message to emergency contacts in the event of an emergency. I made this using Flutter, Firebase, Firestore, and Google Maps API."
        githubLink="https://github.com/ledbetni/SafetyNet"
      />
      <ProjectCard
        title="Statbot"
        description="Statbot is a Discord bot that provides NFL statistics to users. I am currently working on integrating machine learning to predict fantasy football player outcomes. Statbot was built using Python, with pandas dataframes for optimizing the large dataset."
        githubLink="https://github.com/ledbetni/StatBot"
      />

      <ProjectCard
        title="Google Cloud Platform Shipping API"
        description="This project is a RESTful API that allows users to create, read, update, and delete shipping information using Google Cloud Platform services. It was built using Node.js and I wrote a 25-page technical specification detailing all of the endpoints and expected responses, which can be found in the README on github."
        githubLink="https://github.com/ledbetni/Google-App-Engine-Portfolio"
      />
      <ProjectCard
        title="React eCommerce App"
        description="This project is a full-stack eCommerce application built with React, Node.js, Express, and MySQL."
        githubLink="https://github.com/ledbetni/react_mySQLEcommerce"
      />

      <ProjectCard
        title="Resume Business Card Mobile App"
        description="This project is a mobile application which serves as a business card and mobile resume. It was built using Flutter."
        githubLink="https://github.com/ledbetni/mobileResume"
      />
    </div>
  );
};

export default ProjectPage;
