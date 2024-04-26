import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    // Login user
    signInUser(email, password)
      .then((result) => {
        e.target.reset();
        navigate("/");
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // google login
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        navigate("/");
        console.log(result.user);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="pl-10">
            New here? Please{""}
            <NavLink to={"/register"}>
              <button className="btn btn-link">Register</button>
            </NavLink>
          </p>
          <button onClick={handleGoogleLogin} className="btn btn-ghost">
            Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
