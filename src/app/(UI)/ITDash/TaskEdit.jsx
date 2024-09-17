"use client";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function TaskEdit(task) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const EditTaskData = {
    title: "",
    description: "",
    priority: 2,
    progress: 2,
    status: "To Do",
    category: "Hardware Problem",
  };

  EditTaskData["title"] = task.title;
  EditTaskData["description"] = task.description;
  EditTaskData["priority"] = task.priority;
  EditTaskData["progress"] = task.progress;
  EditTaskData["status"] = task.status;
  EditTaskData["category"] = task.category;

  const [formData, setFormData] = useState(EditTaskData);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((preState) => ({
      ...preState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    handleClose();
    e.preventDefault();

    const res = await fetch(`/api/Tasks/${task._id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ formData }),
    });

    // Refresh the page
    location.reload();
    if (!res.ok) {
      throw new Error("Failed to update tasks");
    }
  };
  const statues = ["To Do", "In Progress", "Completed"];
  const categories = [
    "Bug",
    "Feature",
    "Documentation",
    "Hardware Problem",
    "Software Problem",
    "Application Development",
    "Network Problem",
    "Project",
  ];
  console.log(formData);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Update Tasks
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Your Tasks</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form
            onSubmit={handleSubmit}
            method="post"
            className="flex flex-col gap-2 bg-white p-6 rounded-md shadow-md"
            id="edit form"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="title" className="text-gray-700 font-medium">
                Title
              </label>
              <input
                id="title"
                name="title"
                type="text"
                onChange={handleChange}
                required={true}
                value={formData.title}
                className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="description"
                className="text-gray-700 font-medium"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                onChange={handleChange}
                required={true}
                value={formData.description}
                rows="5"
                className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="category" className="text-gray-700 font-medium">
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {categories?.map((category, _index) => (
                  <option key={_index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="priority" className="text-gray-700 font-medium">
                Priority
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

            <div className="flex flex-col gap-2">
              <label htmlFor="progress" className="text-gray-700 font-medium">
                Progress
              </label>
              <input
                type="range"
                id="progress"
                name="progress"
                value={formData.progress}
                min="0"
                max="100"
                onChange={handleChange}
                className="w-full appearance-none bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="status" className="text-gray-700 font-medium">
                Status
              </label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {statues?.map((status, _index) => (
                  <option key={_index} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <button
            form="edit form"
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-1.5 px-2 rounded focus:outline-none focus:shadow-outline"
          >
            Update
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TaskEdit;
