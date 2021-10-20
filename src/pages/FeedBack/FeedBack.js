import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const FeedBack = () => {

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
      <h2 className="fw-bold text-center mt-3">We like to Hear your FeedBack</h2>

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

        <input className="btn btn-secondary btn-block" type="submit" value="Feedback" />
      </form>


    </div>
  );
};

export default FeedBack;