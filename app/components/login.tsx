import { useState } from "react";
import { useNavigate } from "@remix-run/react";

// interface LoginProps {
//   type: "user" | "club";
// }

const Login: React.FC = ({  }) => {
  const navigate = useNavigate();
  const [ isUser, setIsUser ] = useState(true)

  const handleClick =  (user: boolean) => {
    setIsUser(user)
    navigate(user ? "/login" : "/login/club")
  }
  
  return (
    <div
      className="min-h-screen flex items-center justify-center mt-5 bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/ftbl.jpg')",
      }}
    >
      <div className="w-11/12 max-w-4xl bg-white rounded-lg shadow-md flex overflow-hidden">
        <div
          className="w-1/2 hidden md:block bg-cover bg-center"
          style={{ backgroundImage: "url('/images/ftbl2.jpg')" }}
        ></div>

        <div className="w-full md:w-1/2 p-8">
          {/* User/Club Toggle */}
          <div className="flex justify-center mb-6">
            <button
              className={`w-1/4 rounded-sm py-2 text-center font-medium ${
                isUser ? "bg-black text-white" : "bg-white text-black border"
              }`}
              onClick={() =>handleClick(true)}
            >
              User
            </button>
            <button
              className={`w-1/4 rounded-sm py-2 text-center font-medium ${
                isUser ? "bg-white text-black border" : "bg-black text-white"
              }`}
              onClick={() => handleClick(false)}
            >
              Club
            </button>
          </div>

          {/* Login Form */}
          <h2 className="text-2xl font-extrabold text-gray-700 mb-4">
            Sign in to your account
          </h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-600 font-medium mb-1"
              >
                Email
              </label>
              <input
                type="email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your email address"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-600 font-medium mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your password"
              />
            </div>

            <div className="mb-4 text-left">
              <a href="#" className="text-blue-500 hover:underline text-sm">
                Forgot Password
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white font-medium p-3 rounded-lg transition"
            >
              Sign in
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
            Not a member?{" "}
            <a href="" className="text-blue-500 font-medium hover:underline">
              Join now
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
