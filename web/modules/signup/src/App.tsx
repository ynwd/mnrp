import React from 'react';
import './App.css';

function App() {
  return (
    <div className="bg-white dark:bg-gray-800 sm:dark:bg-gray-900 min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-6">
        <h1 className="mb-3 text-3xl text-center">Sign up</h1>
        <div className="bg-gray-100 dark:bg-gray-800 px-5 py-6 rounded w-full border border-gray-300">
          <input
            type="text"
            className="block border border-gray-300 dark:bg-gray-900 w-full p-3 rounded mb-3"
            name="email"
            placeholder="Email" />
          <input
            type="password"
            className="block border border-gray-300 dark:bg-gray-900 w-full p-3 rounded mb-3"
            name="password"
            placeholder="Password" />
          <input
            type="password"
            className="block border border-gray-300 dark:bg-gray-900 w-full p-3 rounded mb-3"
            name="confirm_password"
            placeholder="Confirm Password" />
          <button
            type="submit"
            className="w-full text-center py-3 rounded bg-green-600 dark:bg-green-900 text-white hover:bg-green-dark focus:outline-none my-1"
          >Create Account</button>
        </div>

        <div className="bg-white dark:bg-gray-800 my-3 p-3 rounded w-full border border-gray-300 text-center">
          Have an account? Log in
        </div>

      </div>
    </div>
  );
}

export default App;
