import React from "react";

const Signup: React.FC= () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-11/12 max-w-4xl bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">
          Create a new club account
        </h2>
        
        <form>
          {/* Row 1: Club Name & Contact Person */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-600 font-medium mb-1">
                Club Name:
              </label>
              <input
                type="text"
                placeholder="Enter club name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-1">
                Contact Person:
              </label>
              <input
                type="text"
                placeholder="Enter contact person's name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          
          {/* Row 2: Contact Email & Contact No */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-600 font-medium mb-1">
                Contact Email:
              </label>
              <input
                type="email"
                placeholder="Enter contact email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-1">
                Contact No:
              </label>
              <input
                type="text"
                placeholder="Enter contact number"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          
          {/* Row 3: Address */}
          <div className="mb-4">
            <label className="block text-gray-600 font-medium mb-1">
              Address:
            </label>
            <textarea
              placeholder="Enter address"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          
          {/* Row 4: Description */}
          <div className="mb-4">
            <label className="block text-gray-600 font-medium mb-1">
              Description:
            </label>
            <textarea
              placeholder="Describe your club"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          
          {/* Row 5: Password & Confirm Password */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-600 font-medium mb-1">
                Password:
              </label>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-1">
                Confirm Password:
              </label>
              <input
                type="password"
                placeholder="Confirm password"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          
          {/* Row 6: Upload Logo */}
          <div className="mb-4">
            <label className="block text-gray-600 font-medium mb-1">
              Upload Your Logo:
            </label>
            <input
              type="file"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          {/* Signup Button */}
          <button
            type="submit"
            className="w-full bg-black text-white font-medium py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Signup
          </button>
          
          {/* Already a Member */}
          <p className="text-center text-gray-600 mt-4">
            Already a member?{" "}
            <a href="#" className="text-blue-500 font-medium hover:underline">
              Log in!
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
