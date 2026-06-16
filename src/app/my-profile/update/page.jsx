"use client";

import React from "react";

const UpdateProfilePage = () => {
  return (
    <div className="max-w-xl mx-auto py-10">
      <div className="bg-white p-6 rounded-xl shadow">

        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Update Profile
        </h1>

        <form className="space-y-4">

          <div>
            <label className="block mb-2 font-semibold">
              Name
            </label>

            <input
              type="text"
              placeholder="Enter new name"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Image URL
            </label>

            <input
              type="text"
              placeholder="Enter image URL"
              className="input input-bordered w-full"
            />
          </div>

          <button
            type="submit"
            className="btn bg-blue-600 text-white w-full"
          >
            Update Information
          </button>

        </form>

      </div>
    </div>
  );
};

export default UpdateProfilePage;