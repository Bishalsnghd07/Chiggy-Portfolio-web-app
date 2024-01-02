import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/ModernPortfolio.png"
          title="Modern Next.js Portfolio"
          description="In this portfolio web app,I used modern technologies which is in trend now and I shows my skills and project in it, which needed for me and company desire."
        />
        <ProjectCard
          src="/renewals.png"
          title="Responsive renewal management dashboard"
          description="I created this web page during my job.This page will save the data of clients who engage with the platform or buy the subscription"
        />
        <ProjectCard
          src="/StackOverflow.png"
          title="Full Stack Q&A web application"
          description="I build a StackOverflow clone web application during an internship, additionally I integrated a chatbot and social community page for users where they can ask there querry."
        />
      </div>
    </div>
  );
};

export default Projects;
