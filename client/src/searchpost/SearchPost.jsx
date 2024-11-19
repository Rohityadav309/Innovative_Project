
import React from "react";

function SearchPost() {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-between">
      {/* Input Field */}
      <input
        type="text"
        placeholder="Write posts..."
        className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 mr-4"
      />
      
      {/* Buttons */}
      <div className="flex items-center space-x-2">
        {/* Upload Media Button */}
        <label className="bg-blue-500 text-white px-4 py-2 rounded shadow flex items-center cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 16l4-4m0 0l4 4m-4-4v12m8-12l4 4m0 0l-4-4m4 4v12"
            />
          </svg>
          Upload Media
          <input
            type="file"
            className="hidden"
            onChange={(event) => console.log(event.target.files)}
            multiple
          />
        </label>
        
        {/* Post Button */}
        <button className="bg-green-500 text-white px-4 py-2 rounded shadow flex items-center">
          Post
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default SearchPost;
