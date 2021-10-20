import React from 'react';
import { Row } from 'react-bootstrap';
import usePackages from '../../hooks/usePackages';
import SinglePackage from './SinglePackage/SinglePackage';

const Packages = () => {
  const [packages] = usePackages();
  return (
    <div className="row mb-5">
      <h2 className="text-center mt-3 fw-bold"> OUR PACKAGES </h2>
      <Row xs={1} md={4} className="g-4">
        {
          packages.map(pack => <SinglePackage key={pack.id} pack={pack}></SinglePackage>)
        }
      </Row>
    </div>

  );
};

export default Packages;