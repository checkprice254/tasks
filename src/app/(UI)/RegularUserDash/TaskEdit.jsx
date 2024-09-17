"use client";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function TaskEdit(task) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const EditComment = {
    title: "",
    description: "",
    address: "",
    priority: 2,
    progress: 2,
    status: "To Do",
    category: "Hardware Problem",
    Comment: "",
  };

  EditComment["title"] = task.title;
  EditComment["description"] = task.description;
  EditComment["address"] = task.address;
  EditComment["Comment"] = task.comment;
  EditComment["priority"] = task.priority;
  EditComment["progress"] = task.progress;
  EditComment["status"] = task.status;
  EditComment["category"] = task.category;
  //console.log(task.Comment);
  const [formData, setFormData] = useState(EditComment);

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
      throw new Error("Failed to View tasks");
    }
  };
  const isTextAreaEmpty = formData.Comment === ""; // Check if trimmed Comment is empty
  //console.log(formData);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        View Task
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>View Your Tasks</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form
            onSubmit={handleSubmit}
            method="post"
            className="flex flex-col gap-1 bg-white p-6 rounded-md shadow-md"
            id="edit form"
          >
            <div className="flex flex-col gap-1">
              <label htmlFor="title" className="text-gray-700 font-medium">
                Title
              </label>
              <input
                id="title"
                name="title"
                type="text"
                //onChange={handleChange}
                //required={true}
                defaultValue={formData.title}
                readOnly
                className="bg-gray-200 border rounded-md px-3 py-2 focus:outline-none "
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="address" className="text-gray-700 font-medium">
                Your Physical Location
              </label>
              <input
                id="address"
                name="address"
                type="text"
                //onChange={handleChange}
                //required={true}
                defaultValue={formData.address}
                readOnly
                className="bg-gray-200 border rounded-md px-3 py-2 focus:outline-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="Comment" className="text-gray-700 font-medium">
                Write a comment
              </label>
              <textarea
                id="Comment"
                name="Comment"
                onChange={handleChange}
                required
                defaultValue={formData.Comment}
                rows="3"
                placeholder="Write your comment here"
                className=" border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
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
                //onChange={handleChange}
                //required={true}
                defaultValue={formData.description}
                rows="6"
                readOnly
                className="bg-gray-200 border rounded-md px-3 py-2 focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="status" className="text-gray-700 font-medium">
                Your Task Status
              </label>
              <input
                id="status"
                name="status"
                type="text"
                //onChange={handleChange}
                //required={true}
                defaultValue={formData.status}
                readOnly
                className="bg-gray-200 border rounded-md px-3 py-2 focus:outline-none"
              />
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
                  //onChange={handleChange}
                  defaultValue={1}
                  checked={formData.priority == 1}
                  readOnly
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="priority-1" className="text-gray-700">
                  1
                </label>
                <input
                  id="priority-2"
                  name="priority"
                  type="radio"
                  //onChange={handleChange}
                  defaultValue={2}
                  checked={formData.priority == 2}
                  readOnly
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="priority-2" className="text-gray-700">
                  2
                </label>
                <input
                  id="priority-3"
                  name="priority"
                  type="radio"
                  //onChange={handleChange}
                  defaultValue={3}
                  checked={formData.priority == 3}
                  readOnly
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="priority-3" className="text-gray-700">
                  3
                </label>
                <input
                  id="priority-4"
                  name="priority"
                  type="radio"
                  //onChange={handleChange}
                  defaultValue={4}
                  checked={formData.priority == 4}
                  readOnly
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="priority-4" className="text-gray-700">
                  4
                </label>
                <input
                  id="priority-5"
                  name="priority"
                  type="radio"
                  //onChange={handleChange}
                  defaultValue={5}
                  checked={formData.priority == 5}
                  readOnly
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
                //onChange={handleChange}
                readOnly
                className="w-full appearance-none bg-gray-200 rounded-md focus:outline-none "
              />
            </div>
          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <button
            form="edit form"
            disabled={!isTextAreaEmpty} // Disable button if textarea is NOT empty
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-1.5 px-2 rounded focus:outline-none focus:shadow-outline"
          >
            Post
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TaskEdit;
