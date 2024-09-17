import TaskEdit from "./TaskEdit";
import DeleteTask from "./DeleteTask";

export default function TaskDash(task) {
  return (
    <div className=" min-w-72 max-w-72 m-2 py-8 px-8 bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      <div className="text-center space-y-2 sm:text-left">
        <div className="space-y-0.5">
          <p className="text-lg text-black font-semibold">
            Title: {task.title}
          </p>
          <p className="text-lg text-gray-700">
            Description: {task.description}
          </p>
          <p className="text-lg text-gray-700">Tags: {task.tags}</p>
          <p className="text-lg text-gray-700">progress: {task.progress}</p>
          <p className="text-lg text-gray-700">Created At: {task.createdAt}</p>
          <p className="text-lg text-gray-700">Updated At: {task.updatedAt}</p>
          {/* Display other task details as needed */}
          <div className="flex justify-between">
            <TaskEdit {...task} />
            <DeleteTask {...task} />
          </div>
        </div>
      </div>
    </div>
  );
}
