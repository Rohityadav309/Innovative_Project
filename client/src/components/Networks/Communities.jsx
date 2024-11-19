
import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";

const communities = [
  {
    name: "Tech Gurus India",
    logoUrl: "/assets/tech/tech.jpg", // Replace with a real image URL
    followers: 1500,
    rating: 4.7,
    adminName: "Rahul Sharma",
    numberOfPersons: 75,
    creationDate: "2023-03-10",
  },
  {
    name: "Data Samrat",
    logoUrl: "/assets/tech/data1.jpeg", // Replace with a real image URL
    followers: 1100,
    rating: 4.6,
    adminName: "Ananya Gupta",
    numberOfPersons: 40,
    creationDate: "2023-04-05",
  },
  {
    name: "AI Visionaries",
    logoUrl: "/assets/tech/ai2.jpeg", // Replace with a real image URL
    followers: 2000,
    rating: 4.9,
    adminName: "Kabir Mehta",
    numberOfPersons: 90,
    creationDate: "2022-11-01",
  },
  {
    name: "MLOps Chhatra",
    logoUrl: "/assets/tech/ml1.jpg", // Replace with a real image URL
    followers: 1250,
    rating: 4.6,
    adminName: "Pooja Nair",
    numberOfPersons: 55,
    creationDate: "2023-01-20",
  },
  {
    name: "DevOps Sarthi",
    logoUrl: "/assets/tech/devops.webp", // Replace with a real image URL
    followers: 1300,
    rating: 4.7,
    adminName: "Ravi Singh",
    numberOfPersons: 65,
    creationDate: "2023-02-15",
  },
  {
    name: "Bharat Coders",
    logoUrl: "/assets/tech/data1.jpg", // Replace with a real image URL
    followers: 1800,
    rating: 4.8,
    adminName: "Aarav Patel",
    numberOfPersons: 80,
    creationDate: "2023-05-01",
  },
  {
    name: "AI Kaushal",
    logoUrl: "/assets/tech/ai1.jpg", // Replace with a real image URL
    followers: 1400,
    rating: 4.6,
    adminName: "Meera Iyer",
    numberOfPersons: 70,
    creationDate: "2022-10-10",
  },
  {
    name: "Data Vidya",
    logoUrl: "/assets/tech/data3.jpg", // Replace with a real image URL
    followers: 1050,
    rating: 4.5,
    adminName: "Vivek Raj",
    numberOfPersons: 45,
    creationDate: "2023-06-25",
  },
  {
    name: "AI Seekers",
    logoUrl: "/assets/tech/ai2.jpeg", // Replace with a real image URL
    followers: 1700,
    rating: 4.8,
    adminName: "Sonal Kapoor",
    numberOfPersons: 85,
    creationDate: "2023-03-01",
  },
  {
    name: "Data Warriors",
    logoUrl: "/assets/tech/mlops1.jpg", // Replace with a real image URL
    followers: 1200,
    rating: 4.7,
    adminName: "Aditya Bose",
    numberOfPersons: 50,
    creationDate: "2023-07-15",
  },
];

function getStars(rating) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 .587l3.668 7.431 8.211 1.193-5.939 5.788 1.402 8.171L12 18.896l-7.342 3.866 1.402-8.171-5.939-5.788 8.211-1.193z" />
        </svg>
      );
    } else if (i - rating < 1) {
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 .587l3.668 7.431 8.211 1.193-5.939 5.788 1.402 8.171L12 18.896l-7.342 3.866 1.402-8.171-5.939-5.788 8.211-1.193z" />
        </svg>
      );
    } else {
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-300"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 .587l3.668 7.431 8.211 1.193-5.939 5.788 1.402 8.171L12 18.896l-7.342 3.866 1.402-8.171-5.939-5.788 8.211-1.193z" />
        </svg>
      );
    }
  }
  return stars;
}

function CommunitiesPage() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(communities.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = currentPage * itemsPerPage;
  const currentItems = communities.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="pb-8 p-2 min-h-screen w-full bg-gradient-to-r from-green-200 to-blue-300 relative">
      <h1 className="text-xl font-bold mb-4">My Communities</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {currentItems.map((community, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-3 bg-white rounded-lg shadow-md"
          >
            <img
              src={community.logoUrl || "/fallback-image.jpg"}
              alt={community.name}
              className="w-16 h-16 rounded-full mb-3"
            />
            <h2 className="text-sm font-medium">{community.name}</h2>
            <p className="text-xs text-gray-600">
              {community.followers.toLocaleString()} followers
            </p>
            <div className="flex mt-2">{getStars(community.rating)}</div>
            <div className="mt-2 text-xs text-gray-500">
              <p>Admin: {community.adminName}</p>
              <p>{community.numberOfPersons} members</p>
              <p>Created on: {new Date(community.creationDate).toLocaleDateString()}</p>
            </div>
            <button className="mt-3 px-3 py-1 bg-blue-500 text-white rounded shadow hover:bg-blue-600 text-xs">
              Request to Join
            </button>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-4 absolute bottom-4 w-full">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 0}
          className={`p-2 ${currentPage === 0 ? "text-gray-400" : "text-black"}`}
        >
          <ChevronLeftIcon className="h-5 w-5" />
        </button>
        <div className="flex space-x-1 mx-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${index === currentPage ? "bg-black" : "bg-gray-400"}`}
            />
          ))}
        </div>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages - 1}
          className={`p-2 ${currentPage === totalPages - 1 ? "text-gray-400" : "text-black"}`}
        >
          <ChevronRightIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

export default CommunitiesPage;
