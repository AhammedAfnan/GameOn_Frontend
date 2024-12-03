const Signup: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center mt-5 bg-cover bg-center" style={{backgroundImage:"url('/images/ftbl.jpg')"}}>
      <div className="w-11/12 max-w-4xl bg-white rounded-lg shadow-md flex overflow-hidden">
      <div
          className="w-1/2 hidden md:block bg-cover bg-center"
          style={{ backgroundImage: "url('/images/ftbl2.jpg')" }}
        >
      </div>
        <div className="w-full md:w-1/2 p-8">
        <h2 className="text-2xl font-extrabold text-gray-700 mb-4">
            Create a new account
          </h2>
          <form>
            <div className="mb-4">
              <input
                type="email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your full name"
              />
            </div>

            <div className="mb-4">
              <input
                type="password"
                id="password"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email address"
              />
            </div>

            <div className="mb-4">
              <input
                type="email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your phone no."
              />
            </div>

            <div className="mb-4">
              <input
                type="email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>

            <div className="mb-4">
              <input
                type="email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Confirm password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white font-medium p-3 rounded-lg transition"
            >
              Sign up
            </button>
          </form>
          <div className="my-4 flex items-center">
            <hr className="flex-grow border-gray-300" />
            <span className="px-2 text-gray-500 text-sm">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>
          <button className="w-full border rounded-lg flex items-center justify-center gap-2 p-3 hover:bg-gray-100">
            <img
              src="/images/google.png"
              alt="Google"
              className="w-5 h-5"
            />
            Sign in with Google
          </button>
          <p className="text-center text-gray-600 mt-4">
            Already a member?{" "}
            <a href="/signup" className="text-blue-500 font-medium hover:underline">
              Log in!
            </a>
          </p>
        </div>
        </div>
    </div>
  )
}

export default Signup
