import React from 'react';
import { Link } from 'react-router-dom';

const HighLight = () => {
  return (
    <div className="row">

      <div className="px-4 pt-5 my-5 text-center border-bottom">
        <h1 className="display-4 fw-bold">GymZone Gymnastics & Athletics!</h1>
        <div className="col-lg-10 mx-auto">
          <p className="lead mb-4">At GymZone Gymnastics & Athletics we are not just about “gymnastics” and “flips”. We always encourage our athletes to break down their goals into   manageable steps to ensure on-going development, challenges and success. We continue to invest time, energy and financial resources into designing our unique programs and training our team. This reflects our professional, fun-filled approach and exciting motor-learning opportunities. Our core product is delivered through our carefully selected and certified staff, who’s main goal is to guide in building a healthier, more active, physical and social lifestyle for your child. </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <Link to="/register" className="btn btn-primary btn-lg px-4 me-sm-3">Register Now</Link>
            <Link to="/contact" className="btn btn-outline-secondary btn-lg px-4">Contact Us</Link>
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="container px-5">
            <img src="https://techhossain.github.io/api/details-2.jpg" className="img-fluid border rounded-3 shadow-lg mb-4" alt="" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default HighLight;