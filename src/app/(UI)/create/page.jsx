"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const create = () => {
  const { data: session, status } = useSession();

  //const [id, setId] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    address: "",
    description: "",
    priority: "1",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/Tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Task created successfully");
        // Handle success, e.g., show a success message or redirect to another page
      } else {
        console.error("Failed to create task");
        // Handle error, e.g., show an error message
      }
    } catch (error) {
      console.error("Error creating task:", error);
    }
    // Refresh the page
    location.reload();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="mx-auto max-w-lg p-6">
        <h1 className="text-2xl font-medium mb-4">
          Hello <strong>{session?.user.username}</strong>, Create a New Task
          Today
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label>Title</label>
            <input
              name="title"
              type="text"
              value={formData.title}
              onChange={handleChange}
              className="w-full border p-2"
              required
            />
          </div>
          <div>
            <label>Your Physical Location</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border p-2"
              required
            ></textarea>
          </div>
          <div>
            <label>Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border p-2"
              required
              rows="5"
            ></textarea>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="priority" className="text-black font-normal">
              <p>
                priority <i>5 as highest priority</i>
              </p>
            </label>
            <div className="flex items-center gap-2">
              <input
                id="priority-1"
                name="priority"
                type="radio"
                onChange={handleChange}
                value={1}
                checked={formData.priority == 1}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label htmlFor="priority-1" className="text-gray-700">
                1
              </label>
              <input
                id="priority-2"
                name="priority"
                type="radio"
                onChange={handleChange}
                value={2}
                checked={formData.priority == 2}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label htmlFor="priority-2" className="text-gray-700">
                2
              </label>
              <input
                id="priority-3"
                name="priority"
                type="radio"
                onChange={handleChange}
                value={3}
                checked={formData.priority == 3}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label htmlFor="priority-3" className="text-gray-700">
                3
              </label>
              <input
                id="priority-4"
                name="priority"
                type="radio"
                onChange={handleChange}
                value={4}
                checked={formData.priority == 4}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label htmlFor="priority-4" className="text-gray-700">
                4
              </label>
              <input
                id="priority-5"
                name="priority"
                type="radio"
                onChange={handleChange}
                value={5}
                checked={formData.priority == 5}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label htmlFor="priority-5" className="text-gray-700">
                5
              </label>
            </div>
          </div>

          <button type="submit" className="w-full border p-2">
            Create Task
          </button>
        </form>
      </div>
    </>
  );
};

export default create;
