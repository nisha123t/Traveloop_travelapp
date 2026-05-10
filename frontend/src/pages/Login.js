function Login() {
  return (
    <div className="min-h-screen flex">

      {/* Left Side */}
      <div className="hidden md:flex w-1/2 bg-blue-600 text-white items-center justify-center">
        <div className="p-10">
          <h1 className="text-5xl font-bold mb-4">
            Traveloop
          </h1>

          <p className="text-lg">
            Plan multi-city trips with ease.
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-100">

        <div className="bg-white p-8 rounded-2xl shadow-lg w-[90%] max-w-md">

          <h2 className="text-3xl font-bold mb-6 text-center">
            Login
          </h2>

          <form className="space-y-4">

            <div>
              <label className="block mb-2 font-medium">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Login
            </button>

          </form>

          <p className="mt-6 text-center text-gray-600">
            Don’t have an account?
            <span className="text-blue-600 ml-1 cursor-pointer">
              Sign Up
            </span>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;