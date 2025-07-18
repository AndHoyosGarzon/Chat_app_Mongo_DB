import { Link } from "react-router";
import { useState } from "react";
import useLogin from "../../hooks/useLogin.js";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const { login, loading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(inputs);

    setInputs({
      username: "",
      password: "",
    });
  };

  return (
    <div className="flex flex-col h-screen items-center justify-center min-w-96 mx-auto">
      <div className="w-full h-auto py-12 px-8 rounded-lg shadow-xl text-gray-300 bg-gray-500/15">
        <div className="mb-8 ">
          <h1 className="text-3xl font-bold text-start mb-8 ">Login</h1>
          <p className="text-xs font-semibold">
            Welcome Back Please Login to Your Account
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2 cursor-pointer" htmlFor="username">
              <span className=" font-bold">Username</span>
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter Username"
              className="input input-bordered w-full bg-gray-500/10 border border-gray-500 text-gray-300"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>

          <div className="mt-4">
            <label className="label p-2 cursor-pointer" htmlFor="password">
              <span className="text-base label-text font-bold">Password</span>
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              className="input input-bordered w-full bg-gray-500/10 border border-gray-500 text-gray-300"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>

          <div className="mt-4 ">
            <Link
              to="/signup"
              className="text-xs ms-2 font-bold mt-4 hover:underline hover:text-gray-800  inline-block"
            >
              {"Don't"} have an account?
            </Link>
          </div>

          <div className="mt-2">
            <button
              disabled={loading}
              className="btn btn-block bg-rose-700 hover:bg-rose-800 transition-all duration-300 text-white btn-sm mt-2"
            >
              {loading ? (
                <span className="loading loading-spinner loading-xs"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
