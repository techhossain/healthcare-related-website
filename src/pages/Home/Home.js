import React from 'react';
import Packages from '../Packages/Packages';
import SinglePackage from '../Packages/SinglePackage/SinglePackage';
import Banner from '../Shared/Header/Banner/Banner';
import Gallery from './Gallery/Gallery';
import HighLight from './HighLight/HighLight';

const Home = () => {
  // const
  return (
    <div className="row">
      <Banner></Banner>
      <hr className="w-50 my-5 mx-auto" />
      <HighLight></HighLight>
      <Packages></Packages>
      <Gallery></Gallery>



    </div>
  );
};

export default Home;