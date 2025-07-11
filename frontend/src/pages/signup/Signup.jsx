import { useState } from "react";

const Signup = () => {
  const [gender, setGender] = useState(false);

  return (
    <div className="flex flex-col h-screen items-center justify-center min-w-96 mx-auto">
      <div className="w-full h-auto py-10 px-8 rounded-lg shadow-xl text-gray-300 bg-gray-500/15">
        <div className="mb-4 ">
          <h1 className="text-3xl font-bold text-start mb-4 ">
            Create Account
          </h1>
          <p className="text-xs font-semibold">
            Welcome to the Chat App Please Create an Account
          </p>
        </div>

        <form>
          <div>
            <label className="label p-2 cursor-pointer" htmlFor="fullname">
              <span className="text-sm font-bold">Full Name</span>
            </label>
            <input
              type="text"
              id="fullname"
              placeholder="Jhon Doe"
              className="input input-bordered w-full bg-gray-500/10 border border-gray-500 text-gray-300"
            />
          </div>

          <div className="mt-2">
            <label className="label p-2 cursor-pointer" htmlFor="username">
              <span className="text-sm font-bold">User Name</span>
            </label>
            <input
              type="text"
              id="username"
              placeholder="@jhon_doe"
              className="input input-bordered w-full bg-gray-500/10 border border-gray-500 text-gray-300"
            />
          </div>

          <div className="mt-2">
            <label className="label p-2 cursor-pointer" htmlFor="password">
              <span className="text-sm label-text font-bold">Password</span>
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              className="input input-bordered w-full bg-gray-500/10 border border-gray-500 text-gray-300"
            />
          </div>

          <div className="mt-2">
            <label
              className="label p-2 cursor-pointer"
              htmlFor="currentPassword"
            >
              <span className="text-sm label-text font-bold">
                Current Password
              </span>
            </label>
            <input
              type="currentPassword"
              id="currentPassword"
              placeholder="Enter Current Password"
              className="input input-bordered w-full bg-gray-500/10 border border-gray-500 text-gray-300"
            />
          </div>

          {/* Gender checkbox goes here */}
          <div className="mt-4 w-full">
            <p className="text-xs font-bold text-center">Select Your Gender</p>
            <div className="flex justify-between w-full items-center mt-2">
              <div>
                <input
                  type="checkbox"
                  id="male"
                  className="checkbox checkbox-xs bg-gray-500/10 border border-gray-500 text-gray-300"
                  onChange={() => setGender(!gender)}
                  checked={gender ? "disabled" : ""}
                />
                <label className="label p-2 cursor-pointer" htmlFor="male">
                  <span className="text-xs font-bold">Male</span>
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="female"
                  className="checkbox checkbox-xs bg-gray-500/10 border border-gray-500 text-gray-300"
                  onChange={() => setGender(!gender)}
                  checked={gender ? "" : "disabled"}
                />
                <label className="label p-2 cursor-pointer" htmlFor="female">
                  <span className="text-xs font-bold">Female</span>
                </label>
              </div>
            </div>
          </div>

          <div className="mt-2 ">
            <a
              href="#"
              className="text-xs ms-2 font-bold mt-4 hover:underline hover:text-gray-800  inline-block"
            >
              Already have an account?
            </a>
          </div>

          <div className="mt-2">
            <button className="btn btn-block bg-rose-700 hover:bg-rose-800 transition-all duration-300 text-white btn-sm mt-2">
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
