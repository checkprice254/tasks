import TaskEdit from "./TaskEdit";

export default function TaskDash(task) {
  function formatTimestamp(timestamp) {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    const date = new Date(timestamp);
    const formattedDate = date.toLocaleString("en-US", options);

    return formattedDate;
  }

  const createdDateTime = formatTimestamp(task.createdAt);
  const updateDateTime = formatTimestamp(task.updatedAt);

  return (
    <>
      <div className=" min-w-72 max-w-72 m-2 py-8 px-8 bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-black">Title: {task.title}</p>
            <p className="text-base text-black font-normal ">
              Description: {task.description}
            </p>

            <p className="text-base text-gray-700">Status: {task.status}</p>
            <div>
              Progress
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${task.progress}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-700">
                Created At: {createdDateTime}
              </p>
              <p className="text-xs text-gray-700">
                Updated At: {updateDateTime}
              </p>
            </div>
            <div className="flex justify-between space-x-1">
              <TaskEdit {...task} />
            </div>
            {/* Display other task details as needed */}
          </div>
        </div>
      </div>
    </>
  );
}
