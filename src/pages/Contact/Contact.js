import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Contact = () => {
  const { setError } = useAuth();

  const location = useLocation();
  const redirect_uri = location?.state?.from || '/';
  const history = useHistory();
  console.log(redirect_uri);

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    let { email, password } = data;
    console.log(email, password);
    history.push(redirect_uri);
  };

  return (
    <div className="row mb-5">
      <h2 className="text-center mt-3">Contact Us</h2>

      <div className="col-md-6">
        <form className="my-5 border p-5" onSubmit={handleSubmit(onSubmit)}>

          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" {...register("name", { required: false })} />

            {errors.name && <span className="text-danger">Name Field can't be empty</span>}
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="text" className="form-control" {...register("email", { required: true, pattern: /^\S+@\S+\.\S+$/ })} />

            {errors.email && <span className="text-danger">Please Enter a Valid Email Address</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="mobile" className="form-label">Mobile Number</label>
            <input type="text" className="form-control" {...register("mobile", { required: true })} />

            {errors.mobile && <span className="text-danger">Mobile number can't be empty</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="msg" className="form-label">Type your Message</label>
            <input type="text" className="form-control h-25" {...register("msg", { required: false })} />
          </div>

          <input className="btn btn-secondary btn-block" type="submit" value="Sumit" />
        </form>

      </div>
      <div className="col-md-5">
        <div className="my-5 border p-5">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-primary">Our Location</span>
          </h4>
          <ul className="list-group mb-3">
            <li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0">House No:</h6>
              </div>
              <span className="text-muted">14</span>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0">Road No</h6>
              </div>
              <span className="text-muted">13</span>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0">Sector</h6>
              </div>
              <span className="text-muted">3</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <div className="text-">
                <h6 className="my-0">Uttara</h6>
              </div>
              <span className="text-success"></span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>Dhaka</span>
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default Contact;