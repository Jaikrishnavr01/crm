import React from "react";
import "./Home.css";
import Spline from "@splinetool/react-spline";

// import Spline from "@splinetool/react-spline"; // Optional for 3D hero objects

function Home() {
  return (
    <div className="home-container">
      
      {/* 🚀 Hero Section */}
<section className="hero">
        <div className="hero-content">
          <h1>
            Build Smarter with <span className="gradient-text">CloudTide Innovations</span>
          </h1>
          <p>
            I’m a <b>MERN stack developer</b> building custom CRM & SaaS workflows.  
            You work <b>directly with me</b> — no outsourcing, just reliable one-to-one support.
          </p>
          <div className="hero-buttons">
            <button className="btn primary-btn">🚀 Start Your Project</button>
            {/* <button className="btn secondary-btn">🔎 See Work</button> */}
          </div>
        </div>

        <div className="hero-image">
          <div className="image-card">
              <img
              src={require("../Pages/work1.gif")}
              alt="CRM Mockup"
            />
        
          
            {/* <img
              src="https://www.iannecor.com/wp-content/uploads/2023/01/website-maintenance.gif"
              alt="CRM Mockup"
            /> */}
          </div>
        </div>
      </section>

      {/* ✨ Features Section */}
      <section className="features">
        <h2>✨ What I Do</h2>
        <div className="features-grid">
          <div className="feature-card">
            <span className="feature-icon">👥</span>
            <h3>Client Management</h3>
            <p>
              I help you organize and manage clients, projects, and communication — all in one place.
            </p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🎫</span>
            <h3>Ticketing & Tasks</h3>
            <p>
              Simple ticketing and task tracking system, built by me and managed by me — no middle layers.
            </p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">📊</span>
            <h3>Analytics & Insights</h3>
            <p>
              I integrate custom dashboards and reports to help you monitor progress and performance.
            </p>
          </div>
        </div>
      </section>

      {/* ⚡ Workflow Section */}
    <section className="workflow">
  <h2>⚡ My Workflow</h2>
  <div className="workflow-timeline">
    
    <div className="timeline-step left" data-step="1">
      <div className="content">
        <h4>Login / Register</h4>
        <p>Clients securely create an account or log in to access the CRM platform.</p>
      </div>
    </div>

    <div className="timeline-step right" data-step="2">
      <div className="content">
        <h4>Raise a Ticket</h4>
        <p>Submit an issue, support request, or project task directly within the system.</p>
      </div>
    </div>

    <div className="timeline-step left" data-step="3">
      <div className="content">
        <h4>Assign to Engineer</h4>
        <p>The ticket is automatically assigned to me (or the right engineer) for resolution.</p>
      </div>
    </div>

    <div className="timeline-step right" data-step="4">
      <div className="content">
        <h4>Problem Fixing</h4>
        <p>I handle and fix the problem quickly, keeping you updated until it’s resolved.</p>
      </div>
    </div>

  </div>
</section>

{/* 🌟 Testimonials Section */}
<section className="testimonials">
  <h2>🌟 What Clients Say About My MERN Stack Expertise</h2>
  <div className="testimonial-grid">

    <div className="testimonial-card">
      <p>
        "Working with CloudTide Innovations was an excellent experience. Their deep MERN stack knowledge ensured a highly efficient and reliable web solution. Communication was direct and clear throughout the project."
      </p>
      <div className="author">
        <img src="https://i.pravatar.cc/50?img=45" alt="Client 1" />
        <div>
          <h4>Emily Roberts</h4>
          <span>CEO, FinTech Startup</span>
        </div>
      </div>
    </div>

    <div className="testimonial-card">
      <p>
        "The system built by CloudTide perfectly fit our business needs. The developer's expertise in React and Node.js was apparent from day one, with fast problem-solving and personal support at every step."
      </p>
      <div className="author">
        <img src="https://i.pravatar.cc/50?img=54" alt="Client 2" />
        <div>
          <h4>David Martinez</h4>
          <span>Operations Manager</span>
        </div>
      </div>
    </div>

    <div className="testimonial-card">
      <p>
        "I appreciated the one-on-one attention and the deep understanding of the MERN stack. Task tracking and real-time updates keep us informed and in control throughout the project. Highly recommend for any MERN-based work."
      </p>
      <div className="author">
        <img src="https://i.pravatar.cc/50?img=39" alt="Client 3" />
        <div>
          <h4>Sophia Lee</h4>
          <span>Product Owner</span>
        </div>
      </div>
    </div>

  </div>
</section>




      {/* 💡 Support Section */}
      <section className="support">
        <h2>💡 Dedicated One-to-One Support</h2>
        <p>
          With <span className="gradient-text">CloudTide Innovations</span>, you always work directly <b>with me</b>.  
          I take care of every project personally, ensuring clear communication and reliable support.
        </p>
        <button className="btn primary-btn big-btn">📩 Support</button>
      </section>
    </div>
  );
}

export default Home;
