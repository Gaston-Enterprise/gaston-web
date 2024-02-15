"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();

  const handleButtonClick = async (route: string) => {
    router.push(route);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div>Welcome Engineer! What do you want to do?</div>
      <div className="flex mx-64 flex-col m-10 space-y-10 justify-center space-x-4">
        <button
          onClick={() => handleButtonClick("/processes/service-client")}
          className="py-2 px-4 rounded focus:outline-none text-sm text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Service a Client
        </button>
        <button
          onClick={() => handleButtonClick("/processes/attend-emergency")}
          className="py-2 px-4 bg-indigo-600 text-white rounded hover:bg-indigo-700 focus:outline-none "
        >
          Attend an Emergency
        </button>
        <button
          onClick={() => handleButtonClick("/processes/service-client")}
          className="py-2 px-4 bg-indigo-600 text-white rounded hover:bg-indigo-700 focus:outline-none"
        >
          Schedule a Service
        </button>
      </div>
    </div>
  );
}

// export default page
