import React from "react";
import CreateModal from "../CreateModal";

const page = () => {
  return (
    <div>
      <CreateModal />
    </div>
  );
};

export default page;

/* "use client";
import { useState } from "react";
import { PlusCircle } from "react-bootstrap-icons";

const ExampleComponent = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const HandleClick = () => {};

  return (
    <div className="relative">
      <PlusCircle className="w-6 h-6 cursor-pointer" onClick={toggleDropdown} />

      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 bg-white border rounded shadow-md">
          <button
            className="block w-full py-2 px-4 text-gray-800 hover:bg-gray-200"
            onClick={HandleClick}
          >
            Dropdown Item 1
          </button>
          <button
            className="block w-full py-2 px-4 text-gray-800 hover:bg-gray-200"
            onClick={HandleClick}
          >
            Dropdown Item 2
          </button>
          <button
            className="block w-full py-2 px-4 text-gray-800 hover:bg-gray-200"
            onClick={HandleClick}
          >
            Dropdown Item 3
          </button>
        </div>
      )}
    </div>
  );
};

export default ExampleComponent;


*/
/*import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";

const page = async () => {
  const session = await getServerSession(authOptions);
  //console.log(session);
  return <div>{session.user.username}</div>;
};

export default page;

*/

/* "use client";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function TaskEdit(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const EditTaskData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "not started",
    category: "Hardware Problem",
  };

  EditTaskData["title"] = props.title;
  EditTaskData["description"] = props.description;
  EditTaskData["priority"] = props.priority;
  EditTaskData["progress"] = props.progress;
  EditTaskData["status"] = props.status;
  EditTaskData["category"] = props.category;

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
    e.preventDefault();

    props.updateTasks(props.id, name, role);
  };

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
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form
            onSubmit={handleSubmit}
            method="post"
            className="flex flex-col gap-3 bg-white p-6 rounded-md shadow-md"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Update Your Tasks
            </h3>

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
                <option value="To Do">To Do</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Done</option>
              </select>
            </div>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Update Tasks
            </button>
          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}></Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TaskEdit;*/
