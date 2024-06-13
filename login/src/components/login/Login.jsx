import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
        <div className="text-center">
          <h1 className="text-2xl font-bold">LOGIN</h1>
          <div className="flex justify-center my-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-l-lg">LOGIN</button>
            <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-r-lg">SIGN UP</button>
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" className="mt-1 px-4 py-2 w-full border rounded-lg" placeholder="Enter your email" />
        </div>
        <div className="mt-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input type="password" id="password" className="mt-1 px-4 py-2 w-full border rounded-lg" placeholder="Enter your password" />
          <div className="flex justify-between items-center mt-2">
            <div className="flex items-center">
              <input id="remember" type="checkbox" className="form-checkbox" />
              <label htmlFor="remember" className="ml-2 block text-sm text-gray-900">Remember me</label>
            </div>
            <a href="#" className="text-sm text-blue-500">Forgot Password?</a>
          </div>
        </div>
        <div className="mt-6">
          <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg">Login</button>
        </div>
        <div className="flex justify-center items-center mt-6">
          <p className="text-sm text-center text-gray-400">Don't have an account? <a href="#" className="text-blue-500">Sign up</a></p>
        </div>
        <div className="flex justify-center mt-4">
          <a href="#" className="text-gray-700 mx-2">Facebook</a>
          <a href="#" className="text-gray-700 mx-2">Twitter</a>
          <a href="#" className="text-gray-700 mx-2">Google</a>
        </div>
      </div>
    </div>
  );
};

export default Login;