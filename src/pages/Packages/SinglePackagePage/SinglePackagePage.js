import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import usePackages from '../../../hooks/usePackages';
import useSinglePackage from '../../../hooks/useSinglePackage';

const SinglePackagePage = () => {
  const { id } = useParams('id');

  const [packages, setsPackages] = useState([]);
  const [singlePackage, setSinglePackage] = useState({});

  useEffect(() => {
    fetch('/packageDetails.json')
      .then(res => res.json())
      .then(data => setsPackages(data.packages))
  }, []);

  useEffect(() => {
    const packDetails = packages.find(pack => pack.id === id);
    setSinglePackage(packDetails)
  }, [packages])


  return (
    <div className="my-5">

      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-6">
            <img src={singlePackage?.image} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title">{singlePackage?.title}</h5>
              <p className="card-text">{singlePackage?.information}</p>

              <p><b>Monthly Fees:</b> {singlePackage?.monthlyFees} BDT </p>
              <p><b>Annual Fees:</b> {singlePackage?.annulFees} BDT</p>
              <p><b>Membership Type:</b> <span className="text-danger">{singlePackage?.membershipFor}</span></p>
              <p><b>Preffered Time:</b> {singlePackage?.time}</p>
              <p><b>Allowed Branch:</b> {singlePackage?.branch}</p>

              <button className="btn btn-success">Subscribe Bow</button>

            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default SinglePackagePage;