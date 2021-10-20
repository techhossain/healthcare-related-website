import React from 'react';
import './Gallery.css'

const Gallery = () => {
  return (
    <div className="row mb-5">

      <div className="row" id="gallery">
        <h2 className="text-center fw-bold my-4">GymZone Galleries</h2>
        <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
          <img
            src="https://techhossain.github.io/api/details-7.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt=""
          />

          <img
            src="https://techhossain.github.io/api/details-6.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt=""
          />
        </div>

        <div className="col-lg-3 mb-4 mb-lg-0">
          <img
            src="https://techhossain.github.io/api/details-5.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt=""
          />

          <img
            src="https://techhossain.github.io/api/details-4.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt=""
          />
        </div>

        <div className="col-lg-3 mb-4 mb-lg-0">
          <img
            src="https://techhossain.github.io/api/details-3.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt=""
          />

          <img
            src="https://techhossain.github.io/api/details-1.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt=""
          />
        </div>

        <div className="col-lg-3 mb-4 mb-lg-0">
          <img
            src="https://techhossain.github.io/api/details-8.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt=""
          />

          <img
            src="https://techhossain.github.io/api/details-2.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt=""
          />
        </div>
      </div>

    </div>
  );
};

export default Gallery;