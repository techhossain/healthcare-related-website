import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const SinglePackage = (props) => {
  const { id, title, monthlyFees, information, membershipFor, time, branch, annulFees, image } = props.pack;

  return (
    <div>

      <Col>
        <Card>
          <Card.Img variant="top" className="img-fluid" src={image} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>

            <p>{information.slice(0, 50)}</p>
            <p><small>Monthly: {monthlyFees} BDT | Annual: {annulFees} BDT</small></p>
            <p>Membership Type: <span className="text-danger">{membershipFor.toLowerCase()}</span></p>
            <p>Preffered Time: {time}</p>
            <p>Allowed Branch: {branch}</p>

          </Card.Body>

          <NavLink className="btn btn-dark" to={`/packages/${id}`}>View Details</NavLink>

        </Card>
      </Col>

    </div>
  );
};

export default SinglePackage;