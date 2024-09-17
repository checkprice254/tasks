"use client";

import { useState } from "react";

const CreateTask = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    tags: "",
    assignments: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData }),
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
    <div className="mx-auto max-w-lg p-6">
      <h1 className="text-2xl font-semibold mb-4">Create a Task</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border p-2"
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border p-2"
          ></textarea>
        </div>
        <div>
          <label>Tags</label>
          <input
            type="text"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            className="w-full border p-2"
          />
        </div>
        <div>
          <label>Assigned to</label>
          <input
            type="text"
            name="assignments"
            value={formData.assignments}
            onChange={handleChange}
            className="w-full border p-2"
          />
        </div>

        <button type="submit" className="w-full border p-2">
          Create Task
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
