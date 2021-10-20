import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {

  const { formRegister, setUser, setError } = useAuth();

  const location = useLocation();
  const redirect_uri = location?.state?.from || '/';
  const history = useHistory();
  console.log(redirect_uri);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    let { email, password } = data;
    formRegister(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        history.push(redirect_uri);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage)
      });
  };

  return (
    <div className="row mb-5">
      <h2 className="text-center mt-3">Register</h2>

      <form className="w-50 mx-auto my-5 border p-5" onSubmit={handleSubmit(onSubmit)}>
        <div class="mb-3">
          <label for="email" class="form-label">Email address</label>
          <input type="text" className="form-control" {...register("email", { required: true, pattern: /^\S+@\S+\.\S+$/ })} />

          {errors.email && <span className="text-danger">Please Enter a Valid Email Address</span>}
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" className="form-control" {...register("password", { required: true, pattern: /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{6,}$/ })} />

          {errors.password && <span className="text-danger">Please Enter a password which contain atlease 6 chracter long, one Uppercae, one Lowercase and one special character</span>}
        </div>

        <input className="btn btn-secondary btn-block" type="submit" name="Register" value="Register" />
      </form>
      <p className="text-center">Already Registred? <Link to="/login">Login</Link></p>
    </div>
  );
};

export default Register;