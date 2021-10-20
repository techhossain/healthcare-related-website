import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {

  const { googleSignIn, formLogin, gitHubSignIn, setUser, setError, setIsLoading, error } = useAuth();

  const location = useLocation();
  const redirect_uri = location?.state?.from || '/';
  const history = useHistory();

  // Google Sign In 
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        setUser(result.user);
        history.push(redirect_uri);

      }).catch((error) => {
        setError(error.message)
      }).finally(() => { setIsLoading(false) })
  }

  // gitHub Sign In 
  const handleGitHubSignIn = () => {
    gitHubSignIn()
      .then((result) => {
        setUser(result.user);
        history.push(redirect_uri);

      }).catch((error) => {
        setError(error.message)
      }).finally(() => { setIsLoading(false) })
  }


  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    let { email, password } = data;

    formLogin(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        history.push(redirect_uri);
      }).catch((error) => {
        setError(error.message);
      });

  };

  return (
    <div className="row mb-5">
      <h2 className="text-center mt-3">Please Login</h2>

      <form className="w-50 mx-auto my-5 border p-5" onSubmit={handleSubmit(onSubmit)}>
        <div class="mb-3">
          <label for="email" class="form-label">Email address</label>
          <input type="email" className="form-control" {...register("email", { required: true })} />

          {errors.email && <span className="text-danger">Email field is required</span>}
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" className="form-control" {...register("password", { required: true })} />

          {errors.password && <span className="text-danger">Password field is required</span>}
          <p className="text-danger">{error}</p>
        </div>

        <input className="btn btn-secondary btn-block" type="submit" name="Login" value="Login" />

        <hr />
        <div class="d-grid gap-2 d-md-block text-center">
          <h5 className="text-center">Login with the following</h5>
          <button type="button" onClick={handleGoogleSignIn} className="btn btn-success mx-2"><i className="fab fa-google fa-2x"></i></button>
          <button type="button" onClick={handleGitHubSignIn} className="btn btn-success mx-2"><i className="fab fa-github fa-2x"></i></button>
        </div>
      </form>
      <p className="text-center">New User? <Link to="/register">Register Now</Link></p>


    </div>
  );
};

export default Login;