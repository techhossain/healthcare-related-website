import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="row mb-5">
      <h2 className="text-center mt-3">About GYM Zone</h2>

      <div class="p-5 mb-4 bg-light rounded-3">
        <div class="container py-5">
          <h1 class="display-5 fw-bold text-center">Welcome to GymZone Gymnastics & Athletics!</h1>
          <p class="col-md-12 fs-4 text-center">Our mission is to deliver the highest quality gymnastics-based programs in the North, that encompass child movement, play, safety and – the key ingredient – maximum FUN! GymZone strives to share with each and every child, our experience and knowledge of the exciting sport of gymnastics to help them build a strong foundation to succeed in all sports! Quality people, instruction & programs, safety first and fun always!</p>
          <div class="d-grid gap-2 d-md-block text-center">
            <Link to="/contact" class="btn btn-primary btn-lg mx-2" type="button">Contact Us</Link>
            <Link to="/register" class="btn btn-primary btn-lg mx-2" type="button">Register Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;