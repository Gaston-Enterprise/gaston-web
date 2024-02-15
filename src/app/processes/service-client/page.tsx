"use client";

import React, { useState } from "react";

const page = () => {
  const [clientName, setClientName] = useState("");
  const [todos, setTodos] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleTodoChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value, checked } = e.currentTarget;
    if (checked) {
      setTodos((prevTodos) => [...prevTodos, value]);
    } else {
      setTodos((prevTodos) => prevTodos.filter((todo) => todo !== value));
    }
  };

  const handleClientName = (e: React.FormEvent<HTMLInputElement>) => {
    setClientName((e.currentTarget as HTMLInputElement).value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" flex flex-col items-center my-12 container mx-auto py-5 bg-gray-200 rounded"
    >
      <div className="flex my-4 gap-5">
        <label htmlFor="clientName">Client Name:</label>
        <input
          className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          type="text"
          id="clientName"
          value={clientName}
          onChange={handleClientName}
          required
        />
      </div>
      <div className="grid my-4 grid-cols-2 gap-10 w-[450px]" >
        <p className="py-4 px-2">Service check list:</p>
        <div className="flex flex-col">
          <label className="my-3">
            <input type="checkbox" value="Task 1" onChange={handleTodoChange} />
            <span className="ml-2" >Remove waste engine oil</span>
          </label>
          <label className="my-3">
            <input type="checkbox" value="Task 2" onChange={handleTodoChange} />
            <span className="ml-2" >Change oil & Fuel filter</span>
            
          </label>
          <label className="my-3">
            <input type="checkbox" value="Task 3" onChange={handleTodoChange} />
            
            <span className="ml-2" >Clean air filter</span>
          </label>
          <label className="my-3">
            <input type="checkbox" value="Task 3" onChange={handleTodoChange} />
            
            <span className="ml-2" >Top up coolant & Engine oil if need be</span>
          </label>
          <label className="my-3">
            <input type="checkbox" value="Task 3" onChange={handleTodoChange} />
            
            <span className="ml-2" >Tighten loose bolts</span>
          </label>
        </div>
      </div>
      <div className="my-4 flex gap-5 items-center">
        <label htmlFor="otherStatements" className="text-center">Other Recommendations:</label>
        <textarea
          id="otherStatements"
          className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          // value={otherStatements}
          // onChange={handleOtherStatementsChange}
        />
      </div>
      <button className="py-2 px-4 bg-indigo-600 text-white rounded hover:bg-indigo-700 focus:outline-none " type="submit">Submit</button>
    </form>
  );
};

export default page;
